<template>
  <div class="block__mian--div">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null">
        <div class="logo">
          <img src="http://b-ssl.duitang.com/uploads/item/201702/03/20170203144305_s3SG2.jpeg" alt="网络错误" class="logo__img" >
          <h2 style="color:#fff;">图书管理系统</h2>
        </div>
        <!-- 
          用户为admin时加载侧边栏
         -->
        <div v-if="user==='admin'">
          <a-menu theme="dark" mode="inline" :selectedKeys="[$route.path]">
            <a-menu-item :key="adminData[0].key">
              <router-link :to="adminData[0].to">{{adminData[0].name}}</router-link>
            </a-menu-item>
            <a-menu-item :key="adminData[1].key">
              <router-link :to="adminData[1].to">{{adminData[1].name}}</router-link>
            </a-menu-item>
            <a-menu-item :key="adminData[2].key">
              <router-link :to="adminData[2].to">{{adminData[2].name}}</router-link>
            </a-menu-item>
          </a-menu> 
        </div>
         <!-- 
          用户为operator时加载侧边栏
         -->
        <div v-else-if="user==='operator'">
          <a-menu theme="dark" mode="inline" :selectedKeys="[$route.path]">
           <a-menu-item :key="operatorData[0].key">
              <router-link :to="operatorData[0].to">{{operatorData[0].name}}</router-link>
            </a-menu-item>
            <a-menu-item :key="operatorData[1].key">
              <router-link :to="operatorData[1].to">{{operatorData[1].name}}</router-link>
            </a-menu-item>
            <a-menu-item :key="operatorData[2].key">
              <router-link :to="operatorData[2].to">{{operatorData[2].name}}</router-link>
            </a-menu-item>
          </a-menu> 
        </div>
         <!-- 
          用户为reader时加载侧边栏
         -->
        <div v-else-if="user==='reader'">
          <a-menu theme="dark" mode="inline" :selectedKeys="[$route.path]">
            <a-menu-item :key="readerData[0].key">
              <router-link :to="ViewRouter.readerRouter[0].to">{{ViewRouter.readerRouter[0].name}}</router-link>
            </a-menu-item>
            <a-menu-item :key="readerData[1].key">
              <router-link :to="readerData[1].to">{{readerData[1].name}}</router-link>
            </a-menu-item>
            <a-menu-item :key="readerData[2].key">
              <router-link :to="readerData[2].to">{{readerData[2].name}}</router-link>
            </a-menu-item>
            <a-menu-item :key="readerData[3].key">
              <router-link :to="readerData[3].to">{{readerData[3].name}}</router-link>
            </a-menu-item>
          </a-menu> 
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="head__top--layout" style="background: #fff; padding: 0">
          <!-- <h1>hello</h1> -->
          <div class="box__right--div">
            <a-input-search placeholder="input search text" style="width: 200px" />
            <a-dropdown :trigger="['click']">
              <a-avatar class="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  @click="e => e.preventDefault()"/>
              <a-menu slot="overlay">
                <a-menu-item key="0">
                  个人中心
                </a-menu-item>
                <a-menu-item key="1">
                  其他
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3" @click="showConfirm">
                  退出登录
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px',minHeight: '280px' }"
        >
          <div id="showDraw" ref="draw">
          </div>
          <div id="showit" ref="show">
              <router-view name="admin"></router-view>
              <router-view name="operator"></router-view>
              <router-view name="reader"></router-view>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-modal v-model="visible" @ok="handleOk" :mask="true" @cancel="nois">
      <p>系统检查到您未登录，是否到登录页？</p>
    </a-modal>
  </div>
</template>
<script>
import ViewRouter from '../utils/index'

export default {
  data () {
    return {
      collapsed: false,
      ViewRouter,
      visible:false,
      user: 'null',
      adminData: ViewRouter.adminRouter,
      readerData : ViewRouter.readerRouter,
      operatorData :ViewRouter.operatorRouter
    }
  },
  methods: {
    handleOk(e) {
      console.log(e);
      let {isTrusted} = e
      if (isTrusted) {
        this.$router.push({path:'/'})
      }
      this.visible = false;
    },
    nois () {
      location.href = 'https://www.baidu.com'
    },
    showConfirm() {
      this.$confirm({
        title: '您要退出登录吗?',
        onOk: () => {
          sessionStorage.setItem("userName",'null')
          this.$router.push({path: '/'})
        },
        onCancel() {
        },
        class: 'test',
      });
    }
  },
  created() {
    this.$mount()
    let user = sessionStorage.getItem("userName")
    let draw = this.$refs.draw
    let show = this.$refs.show
    if(user!='' || user !='null'){
      this.user = user
      draw.style.display='none'
      show.style.display = 'block'
    }
  },
  mounted() {
    let {user} = this
     if (user==='null') {
      this.visible = true
      this.$refs.show.style.display='none'
    }
    console.log(user)
  }
};
</script>
<style lang="less" scope>
#showDraw{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
  display:block ;
}
#showit{
  display: none
}
.block__mian--div{
  height: 100%;
  width: 100%;
}
.head__top--layout{
  display: flex;
  .trigger{
    flex:1;
    text-align: left;
  }
  .box__right--div{
    flex:1;
    text-align: right;
    margin-right: 20px;
  }
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger{
  width:100%;
  height:100%;
  .logo{
    display: flex;
    padding: 5px;
    margin: 20px 0;
    .logo__img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    h2{
      line-height: 50px;
      text-align: center;
      margin: 0 auto;
    }
  }
  // .box__right--div{
  //   text-align: right;
  //   margin-right: 20px;
  //   vertical-align: middle;
  //   .avatar{
  //     margin-left: 10px;
  //   }
  // }
}
.avatar:hover{
  cursor: pointer;
}
</style>
