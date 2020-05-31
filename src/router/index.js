import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('../views/Login/index')
const Bookman = () => import('../views/admin/BookManagement/index')
const Readerman = () => import("../views/admin/ReaderManagement/index")
const Updatepw = () => import("../views/admin/UpdatePwd/index")
const Lookstatus = () => import("../views/operator/look")
const Returnbook = () =>import("../views/operator/returnbook")
const Borrowbooks = () => import("../views/operator/borrowbooks")
const falil = () => import("../views/fail/404")
const Bookstatus = () => import("../views/render/bookstatus")
const Readstatus = () => import("../views/render/lookstatus")
const Persionlinfo = () => import("../views/render/personalinfo")
const Renderupwd = () => import("../views/render/updatepwd")
const Home = () => import("../views/index")
Vue.use(VueRouter)
// 路由注册
  const routes = [
    {
      path: '/',
      redirect: '/user/login'
    },
    {
      path: '/Home/index',
      name:'home',
      components: {
        home:Home
      },
      children: [
        {
          path: '/Home/admin/bookmanagement/index',
          name: 'Bookman',
          components: {
            admin:Bookman
          }
        },
        {
          path: '/Home/admin/readermanagement/index',
          name: 'Readerman',
          components:{
            admin:Readerman
          }
        },
        {
          path: '/Home/admin/updatepw/index',
          name: 'Updatepw',
          components:{
            admin:Updatepw
          }
        },
        {
          path: '/Home/operator/look/index',
          name: 'lookstatus',
          components:{
            operator:Lookstatus
          }
        },
        {
          path: '/Home/operator/returnbook/index',
          name: 'returnbook',
          components:{
            operator:Returnbook
          }
        },
        {
          path: '/Home/operator/borrowbooks/index',
          name: 'borrowbooks',
          components:{
            operator:Borrowbooks
          }
        },
        {
          path: '/Home/reader/updatepwd/index',
          name: 'renderupdatepwd',
          components:{
            reader:Renderupwd
          }
        },{
          path: '/Home/reader/lookstatus/index',
          name: 'renderlookstatus',
          components:{
            reader:Readstatus
          }
        },
        {
          path: '/Home/reader/bookstatus/index',
          name: 'bookstatus',
          components:{
            reader:Bookstatus
          }
        },
        {
          path: '/Home/reader/personalinfo/index',
          name: 'personalinfo',
          components:{
            reader:Persionlinfo
          }
        }
      ]
    },
  {
    path: '/user/login',
    name: 'login',
    components:{
      login:Login
    }
  },
  {
    path: '/fail/404',
    name: 'fail',
    components:{
      falil: falil
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 路由守卫，用于判段路径是否有效
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { //匹配前往的路由不存在
    from.name ? next({
      name: from.name
    }) : next('/fail/404'); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
  } else {
    next(); //如果匹配到正确跳转
  }
});
export default router
