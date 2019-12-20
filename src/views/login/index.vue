<template>
      <div class="login">
          <el-card class="login-card">
              <div class="title">
              <img src="../../assets/img/logo_index.png" alt="">
              </div>
              <el-form style="margin-top:8px">
                  <el-form-item>
                      <el-input placeholder='请输入手机号'></el-input>
                  </el-form-item>
                  <el-form-item style="width:65%">
                  <el-col :span=20>
                  <el-input placeholder='请输入验证码'></el-input>
                  </el-col>
                  <el-col :span=1 style="margin-left:20px">
                  <el-button type="primary" round>发送验证码</el-button>
                  </el-col>
                  </el-form-item>
                  <el-form-item>
                      <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
                  </el-form-item>
                  <el-form-item>
                      <el-button type="primary" plain style="width:100%">登录</el-button>
                  </el-form-item>
              </el-form>
          </el-card>
      </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.login{
    background: url('../../assets/img/login_bg.jpg');
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card{
        width: 440px;
        height: 330px;
        .title{
            height: 60px;
            text-align: center;
        }
    }
}
</style>
