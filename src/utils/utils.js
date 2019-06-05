// 求数组中的最大值和最小值
import LineChart from './charts/baseType/lineChart'
import AnalysisLineChart from './charts/baseType/analysisLineChart'
import BarChart from './charts/baseType/barChart'
import StripChart from './charts/baseType/stripChart'
import PieChart from './charts/baseType/pieChart'

export const getByteLen = function(val, maxLen) {
  var len = 0

  for (var i = 0; i < val.length; i++) {
    var a = val.charAt(i)
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2
    } else {
      len += 1
    }
    // console.log(len); console.log(maxLen);
    if (maxLen && len === maxLen) {
      return i
    } else if (maxLen && len > maxLen) {
      return i - 1
    }
  }
  return len
}

export const formatterText = function(text, num) {
  var len = 0
  var r = ''
  for (var i = 0; i < text.length; i++) {
    var a = text.charAt(i)
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2
    } else {
      len += 1
    }
    if (len <= num) {
      r += a
    } else {
      r += '...'
      break
    }
  }
  return r
}

export function cloneObj(oldObj) { // 复制对象方法
  if (typeof (oldObj) !== 'object') { return oldObj }
  if (oldObj == null) { return oldObj }
  var newObj = {}
  for (var i in oldObj) {
    newObj[i] = cloneObj(oldObj[i])
  }
  return newObj
}
export function extendObj() { // 扩展对象
  var args = arguments
  if (args.length < 2) { return }
  var temp = cloneObj(args[0]) // 调用复制对象方法
  for (var n = 1; n < args.length; n++) {
    for (var i in args[n]) {
      temp[i] = args[n][i]
    }
  }
  return temp
}
export function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window
    .location
    .search
    .substr(1)
    .match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString

/**
 * 判断对象是否是数组
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
export function isArray(val) {
  return toString.call(val) === '[object Array]'
}

/**
 * 判断是否是 ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
export function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]'
}

/**
 * 判断是否是 FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
export function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData)
}

/**
 * 判断是否是 String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
export function isString(val) {
  return typeof val === 'string'
}

/**
 * 判断是否是 Number
 *
 * @param {Object} val 需要判断的值
 * @returns {boolean} 如果是，返回true;如果不是返回fale
 */
export function isNumber(val) {
  return typeof val === 'number'
}

/**
 * 判断值是否是 undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
export function isUndefined(val) {
  return typeof val === 'undefined'
}

/**
 * 判断值是否是 Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
export function isObject(val) {
  return val !== null && typeof val === 'object'
}

/**
 * 判断值是否是 Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
export function isDate(val) {
  return toString.call(val) === '[object Date]'
}

/**
 * 判断值是否是 File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
export function isFile(val) {
  return toString.call(val) === '[object File]'
}

/**
 * 判断值是否是 Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
export function isBlob(val) {
  return toString.call(val) === '[object Blob]'
}

/**
 * 判断值是否是 Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
export function isFunction(val) {
  return toString.call(val) === '[object Function]'
}

/**
 * 字符串去除前后空格
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
export function trim(str) {
  return str
    .replace(/^\s*/, '')
    .replace(/\s*$/, '')
}

/**
 * 将遍历对象和数组组合到同一个函数中
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
export function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj]
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj)
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj)
      }
    }
  }
}

/**
 * 后面对象深度覆盖前面的对象
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
export function merge(/* obj1, obj2, obj3, ... */) {
  var result = {}
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val)
    } else {
      result[key] = val
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue)
  }
  return result
}

function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    return fn.apply(thisArg, args)
  }
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
export function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg)
    } else {
      a[key] = val
    }
  })
  return a
}

export function formatUrl(url) {
  return new RegExp(`${url.replace(/\//g, '\\\/')}`)
}
export function barChart(data, content, other) {
  let chart = new BarChart({}, data, content, other)
  return chart
}
export function lineChart(data, content, other) {
  let chart = new LineChart({}, data, content, other)
  return chart
}
export function analysisLineChart(data, content, other) {
  let chart = new AnalysisLineChart({}, data, content, other)
  return chart
}
export function pieChart(data, content, other) {
  let chart = new PieChart({}, data, content, other)
  return chart
}
export function stripeChart(data, content, other) {
  let chart = new StripChart({}, data, content, other)
  return chart
}
