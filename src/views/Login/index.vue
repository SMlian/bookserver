<template>
  <div class="block__login--div">
    <div class="head__div">
      <h1 class="title__p">图书管理系统</h1>
      <div class="form__div">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                { rules: [{ required: true, message: 'Please input your username!' }] },
              ]"
              placeholder="admin/reader/operator"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: 'Please input your Password!' }] },
              ]"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                },
              ]"
            >
              Remember me
            </a-checkbox>
            <a class="login-form-forgot" href="">
              忘记密码？
            </a>
            <a-button type="primary" html-type="submit" class="login-form-button">
              Log in
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      routerStatus: false
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values);
          let {userName,password} = values
          if (userName === 'admin' && password === 'admin123') {
            this.$router.push({path: '/Home/admin/readermanagement/index',name:'Readerman',params:{userName:userName}})
            sessionStorage.setItem("userName",userName)
          } else if (userName === 'reader' && password === 'reader123') {
            this.$router.push({path: '/Home/reader/personalinfo/index',name:'personalinfo',params:{userName:userName}})
            sessionStorage.setItem("userName",userName)
          } else if (userName === 'operator' && password === 'operator123') {
            this.$router.push({path: '/Home/operator/look/index',name:'lookstatus',params:{userName:userName}})
            sessionStorage.setItem("userName",userName)
          } else {
            this.error()
          }
        } 
      });
    },
    error() {
      this.$error({
        title: '登录错误',
        content: '请检查您的账户或密码是否正确',
      });
    },
  },
  mounted() {
    let user = sessionStorage.getItem("userName")
    if(user != undefined || user != 'null') {
      if (user === 'admin') {
         this.$router.push({path: '/Home/admin/readermanagement/index',name:'Readerman',params:{userName:user}})
      } else if (user === 'reader') {
        this.$router.push({path: '/Home/reader/personalinfo/index',name:'personalinfo',params:{userName:user}})
      } else if (user === 'operator') {
        this.$router.push({path: '/Home/operator/look/index',name:'lookstatus',params:{userName:user}})
      }
    }
  },
};
</script>
<style lang="less" scoped>
.block__login--div{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590685449486&di=7d1a7cd5f0a8539af28bb71f1bb17a0a&imgtype=0&src=http%3A%2F%2Fimgs.aixifan.com%2Flive%2F1483601914556%2F1483601914556.jpg') no-repeat;
  background-size: 100% 100%;
  .head__div{
    height: 320px;
    width: 320px;
    background:#fff;
    border-radius: 10px;
    padding: 20px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .title__p{
      height: 35px;
      line-height: 35px;
      text-align: center;
    }
  }
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
