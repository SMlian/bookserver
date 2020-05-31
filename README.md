## 初始化
npm install
### 启动服务
npm run serve
访问路径： http://localhost:8080/
#### 项目简介
图书管理系统，分为三个角色：管理员，操作员，读者
各自分别的菜单栏为
管理员(userName:admin  pwd:admin123)
菜单栏
读者信息管理(/Home/admin/readermanagement/index)
图书信息管理(/Home/admin/bookmanagement/index)
修改密码(/Home/admin/updatepw/index)



操作员(userName:operator  pwd:operator123)
菜单栏
查看读者借阅情况(/Home/operator/look/index)
还书处理(/Home/operator/returnbook/index)
借书处理(/Home/operator/borrowbooks/index)



读者(userName:reader  pwd:reader123)
菜单栏
查看个人信息(/Home/reader/personalinfo/index)
查看借阅情况(/Home/reader/lookstatus/index)
查看借书情况(/Home/reader/bookstatus/index)
修改密码(/Home/reader/updatepwd/index)


#### 大致操作流程
看图


