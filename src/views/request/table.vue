<template>
<div>
  <el-button type="primary" size="small" @click="showImportDialog=true;isEdit=false">新建</el-button>
  <el-table class="table-border-top-none" :empty-text="tableTip" border stripe :data="list">
    <el-table-column label="id" prop="studentId"></el-table-column>
    <el-table-column label="姓名" prop="name" align='center'></el-table-column>
    <el-table-column label="操作" align='center'>
      <template slot-scope="scope">
          <el-button type="text" size="small" class="el-table-operation" @click.native.prevent="deleteRow(scope.$index, scope.row)">删除</el-button>
          <el-button type="text" size="small" class="el-table-operation" @click="editItem(scope.row)">编辑</el-button>
        </template>
    </el-table-column>
  </el-table>
  <el-dialog :visible.sync='showImportDialog' :close-on-click-modal='false'>
    <el-form ref="person" :model="personObj" label-width="130px" style="padding-top:20px;">
      <el-form-item label="姓名" prop="name">
        <el-input style="width: 500px;" v-model.trim="personObj.name" placeholder='请输入姓名'></el-input>
      </el-form-item>
      <el-form-item label="密码"  prop="password" v-if="!isEdit">
        <el-input style="width: 500px;" type="password" v-model.trim="personObj.password" placeholder='请输入密码'></el-input>
      </el-form-item>
      <el-form-item label="确认密码"  prop="repeatPassword" v-if="!isEdit">
        <el-input style="width: 500px;" type="password" v-model.trim="personObj.repeatPassword" placeholder='请输入密码'></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input style="width: 500px;" type="text" v-model.trim="personObj.phone" placeholder='请输入手机号'></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input style="width: 500px;" type="text" v-model.trim="personObj.email" placeholder='请输入邮箱'></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="personObj.sex" placeholder="请选择性别">
          <el-option
            label="男"
            :value="1">
          </el-option>
          <el-option
            label="女"
            :value="2">
          </el-option>

        </el-select>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input size="small" type="number" v-model.trim="personObj.age"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="user_status">
        <el-switch
          v-model="personObj.user_status"
          :active-value="0"
          :active-text="personObj.user_status === 0 ? '已激活' : '已停用'"
          :inactive-value="1">
        </el-switch>
      </el-form-item>

    </el-form>
    <div slot='footer' class='dialog-footer' style='text-align:center;'>
      <el-button class='btn-green btn-large' @click='submitDailog()'>提交</el-button>
    </div>
  </el-dialog>
</div>  
</template>
<script>
import { MD5 } from '../../utils/md5'
export default{
  data() {
    return {
      list: [],
      tableTip: '',
      showImportDialog: false,
      isEdit: false,
      // 表单数据对象
      personObj: {
        name: '',
        email: '',
        password: '',
        repeatPassword:'',
        sex: 0,
        age: 20,
        user_status: 0
      },      
      // 表单验证规则
      rules: {
        name: [
          {
            required: true,
            message: '请输入登录名',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              const reg = /^[0-9a-zA-Z]+$/
              if (!reg.test(value)) {
                callback(new Error('登录名必须为英文或数字'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          },
          {
            min: 3,
            max: 20,
            trigger: 'blur',
            message: '登录名长度为3-20个字'
          }
        ],
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
              if (!reg.test(value)) {
                callback(new Error('请输入有效的手机号'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: '请输入邮箱',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 50,
            trigger: 'blur',
            message: '邮箱长度不能超过50个字'
          },
          {
            validator: (rule, value, callback) => {
              const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
              if (!reg.test(value)) {
                callback(new Error('请输入正确的邮箱'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              const reg = /^[0-9a-zA-Z]+$/
              if (reg.test(value) && value.length >= 6 && value.length <= 12) {
                this.$refs.person.validateField('repeatPassword')
                callback()
              } else {
                callback(new Error('密码必须为英文或数字，长度为6-12位'))
              }
              // if (!this.validatePass(value)) {
              //   callback(new Error('密码需要8-16位，且必须包含大小写字母、数字、特殊字符中的任意两种!'))
              // } else {
              //   callback()
              // }
            },
            trigger: 'blur'
          }
        ],
        repeatPassword: [
          {
            required: true,
            message: '请输入重复密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              const reg = /^[0-9a-zA-Z]+$/
              if (value === this.personObj.password) {
                if (reg.test(value) && value.length >= 6 && value.length <= 12) {
                  callback()
                } else {
                  callback(new Error('密码必须为英文或数字，长度为6-12位'))
                }
                // if (!this.validatePass(value)) {
                //   callback(new Error('密码需要8-16个字，且必须包含大小写字母、数字、特殊字符中的任意两种!'))
                // } else {
                //   callback()
                // }
              } else {
                callback(new Error('确认密码与密码不一致'))
              }
            },
            trigger: 'blur'
          }
        ],
        sex: [
          {
            type: 'number',
            required: true,
            message: '请选择性别',
            trigger: 'change'
          }
        ],
        user_status: [
          {
            type: 'number',
            required: true,
            message: '请选择状态',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    getList() {
      this.axios({
        url: '/user/list',
        method: 'get',
      }).then(r => {
        if (r.code === 200) {
          this.list = r.data
        } else {
          this.tableTip = '暂无数据'
        }
      }).catch(r => {
        this.list = '加载失败'
      })
    },
    deleteRow(index, row) {
      this.$confirm('此操作将删除 ' + row.name + ' 的信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios({
          method: 'post',
          url: '/user/del',
          params: {
            '_id': row._id
          },
          hideError: true
          // contentType: 'application/json'
        }).then((res) => {
          if (res.code === 200) {
            this.getList()
          } else if (res.code === 500) {
            MessageBox.alert(res.msg)
          }
        })
      })
    },
    editItem(row) {
      this.isEdit = true;
      this.showImportDialog = true;
      this.personObj = Object.assign({}, row);
    },
    add() {
      let params = Object.assign({}, this.personObj)
      params.password = MD5(this.personObj.name + this.personObj.password + 'adtime.com')
      params.repeatPassword = MD5(this.personObj.name + this.personObj.repeatPassword + 'adtime.com')
      this.axios({
        method: 'post',
        url: '/user/create',
        contentType: 'application/json',
        data: params
      }).then(res => {
        if (res.code === 200) {
          this.$router.push({
            path: '/request/table'
          })
        }
      })
    },
    update() {
      this.axios({
        method: 'post',
        url: '/user/update',
        contentType: 'application/json',
        data: this.personObj
      }).then(res => {
        if (res.code === 200) {
          this.$router.push({
            path: '/request/table'
          })
        }
      })
    },
    submitDailog() {
      this.$refs.person.validate(valid => {
        if (valid) {
          if (!this.isEdit) {
            this.add()
          } else {
            this.update()
          }
        } else {
          return false
        }
      })
    },       
  },
  created() {
    this.getList()
  },
}
</script>