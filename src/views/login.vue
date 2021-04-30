<template>
  <div class="login-container">
    <div class="login-box">
      <div class="logo"><img src="../assets/img/logo.png"></div>
      <el-form label-width="0px" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <el-form-item prop="uname">
          <el-input v-model="loginForm.uname"  prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="pws">
          <el-input v-model="loginForm.pws"  prefix-icon="el-icon-key" type="password"></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="onSubmit">Login</el-button>
          <el-button  @click="resetForm">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  props: {},
  data () {
    return {
      // 登录表单数据绑定
      loginForm: {
        uname: 'MrCho',
        pws: '123456'
      },
      // 验证表单规则对象
      loginFormRules: {
        uname: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        pws: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // 表单预验证
    onSubmit () {
      this.$router.push('/home')
    }
  },
  // 重置对象
  resetForm () {
    this.$refs.loginFormRef.resetFields()
  // }
  }
}
</script>

<style scoped lang="less">
.login-container{
    background-color: #E4E7ED;
    height: 100%;
}
.login-box{
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 30px 30px 10px 30px;
}
.logo{
  width: 100%;
  display: flex;
  justify-items: center;
}
.logo img{
  height: 50px;
  padding-bottom: 30px;
  margin: 0px auto;
}
.login-btn{
  float: right;
}
</style>
