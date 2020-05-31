// 菜单栏
const adminRouter = [
  {
    title: '管理员',
    key: '/Home/admin/readermanagement/index',
    to: '/Home/admin/readermanagement/index',
    name: '读者信息管理'
  },{
    title: '管理员',
    key: '/Home/admin/bookmanagement/index',
    to: '/Home/admin/bookmanagement/index',
    name: '图书信息管理'
  },{
    title: '管理员',
    key: '/Home/admin/updatepw/index',
    to: '/Home/admin/updatepw/index',
    name: '修改密码'
  }
]

const operatorRouter = [
  {
    title: '操作员',
    key: '/Home/operator/look/index',
    to: '/Home/operator/look/index',
    name: '查看读者借阅情况'
  },
  {
    title: '操作员',
    key: '/Home/operator/returnbook/index',
    to: '/Home/operator/returnbook/index',
    name: '还书处理'
  },{
    title: '操作员',
    key: '/Home/operator/borrowbooks/index',
    to: '/Home/operator/borrowbooks/index',
    name: '借书处理'
  },
]

const readerRouter = [
  {
    title: '读者',
    key: '/Home/reader/updatepwd/index',
    to: '/Home/reader/updatepwd/index',
    name: '修改密码'
  },
  {
    title: '读者',
    key: '/Home/reader/bookstatus/index',
    to: '/Home/reader/bookstatus/index',
    name: '查看图书信息'
  },
  {
    title: '读者',
    key: '/Home/reader/lookstatus/index',
    to: '/Home/reader/lookstatus/index',
    name: '查看借阅情况'
  },
  {
    title: '读者',
    key: '/Home/reader/personalinfo/index',
    to: '/Home/reader/personalinfo/index',
    name: '查询个人信息'
  }
]

export default {
  adminRouter,operatorRouter,readerRouter
}

