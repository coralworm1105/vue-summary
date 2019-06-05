/* istanbul ignore next */

import Vue from 'vue'

const isServer = Vue.prototype.$isServer
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/
const ieVersion = isServer
  ? 0
  : Number(document.documentMode)

/* istanbul ignore next */
const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
/* istanbul ignore next */
const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset
      ? letter.toUpperCase()
      : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

/* istanbul ignore next */
export const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/* istanbul ignore next */
export const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/* istanbul ignore next */
export const once = function(el, event, fn) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

/* istanbul ignore next */
export function hasClass(el, cls) {
  if (!el || !cls) { return false }
  if (cls.indexOf(' ') !== -1) { throw new Error('className should not contain space.') }
  if (el.classList) {
    return el
      .classList
      .contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

/* istanbul ignore next */
export function addClass(el, cls) {
  if (!el) { return }
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) { continue }

    if (el.classList) {
      el
        .classList
        .add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

/* istanbul ignore next */
export function removeClass(el, cls) {
  if (!el || !cls) { return }
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) { continue }

    if (el.classList) {
      el
        .classList
        .remove(clsName)
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

/* istanbul ignore next */
export const getStyle = ieVersion < 9
  ? function(element, styleName) {
    if (isServer) { return }
    // debugger
    if (!element || !styleName) { return null }
    styleName = camelCase(styleName)
    if (styleName === 'float') {
      styleName = 'styleFloat'
    }
    try {
      switch (styleName) {
        case 'opacity':
          try {
            return element
              .filters
              .item('alpha')
              .opacity / 100
          } catch (e) {
            return 1.0
          }
        default:
          return (element.style[styleName] || element.currentStyle
            ? element.currentStyle[styleName]
            : null)
      }
    } catch (e) {
      return element.style[styleName]
    }
  }
  : function(element, styleName) {
    if (isServer) { return }
    if (!element || !styleName) { return null }
    styleName = camelCase(styleName)
    if (styleName === 'float') {
      styleName = 'cssFloat'
    }
    try {
      var computed = document
        .defaultView
        .getComputedStyle(element, '')
      return element.style[styleName] || computed
        ? computed[styleName]
        : null
    } catch (e) {
      return element.style[styleName]
    }
  }

/* istanbul ignore next */
export function setStyle(element, styleName, value) {
  if (!element || !styleName) { return }

  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value)
        ? ''
        : 'alpha(opacity=' + value * 100 + ')'
    } else {
      element.style[styleName] = value
    }
  }
}

export function getText(elem) {
  let node = null
  let ret = ''
  let i = 0
  let nodeType = elem.nodeType

  if (!nodeType) {
    // If no nodeType, this is expected to be an array
    for (i = 0; (node = elem[i]); i++) {
      // Do not traverse comment nodes
      ret += getText(node)
    }
  } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
    // 备注：nodeType === 1 为元素节点，9 为document节点，11为document fragment节点 Use textContent
    // for elements innerText usage removed for consistency of new lines (see
    // #11153)
    if (typeof elem.textContent === 'string') {
      return elem.textContent
    } else {
      // Traverse its children
      for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
        ret += getText(elem)
      }
    }
  } else if (nodeType === 3 || nodeType === 4) {
    // nodeType === 3为TEXT_NODE，4为CDATA_SECTION_NODE
    return elem.nodeValue
  }
  // Do not include comment or processing instruction nodes

  return ret
}

export function getClient() {
  let winWidth = 0
  let winHeight = 0
  // 获取窗口宽度
  if (window.innerWidth) {
    winWidth = window.innerWidth
  } else if ((document.body) && (document.body.clientWidth)) {
    winWidth = document.body.clientWidth
  }
  // 获取窗口高度
  if (window.innerHeight) {
    winHeight = window.innerHeight
  } else if ((document.body) && (document.body.clientHeight)) {
    winHeight = document.body.clientHeight
  }
  return { width: winWidth, height: winHeight }
}

export function attr(elem, name, value) {
  if (typeof value !== 'undefined') {
    elem.setAttribute(name, value)
  } else {
    return elem.getAttribute(name) || ''
  }
}

export function cloneElem(elem) {
  let oElem = document.createElement(elem.nodeName)
  oElem.innerHTML = elem.innerHTML
  return oElem
}
