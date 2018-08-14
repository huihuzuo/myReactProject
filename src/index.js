//次页面是映射路由
//入口js

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'   //Provider  代理 ，用来监听state的变化的，重新渲染页面
import {HashRouter, Switch, Route} from 'react-router-dom'

import store from './redux/store'
import Login from './container/login/login'
import Register from './container/register/register'
import Main from './container/main/main'
import "./assets/css/main.less"


//渲染组件标签到页面
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route component={Main} />
      </Switch>
    </HashRouter>
  </Provider>
  ),document.getElementById('root'));



/*
HashRouter 在发送请求时，会在地址栏中带#（兼容老版本）
BrowserRouter  不带#,
Switch 是用来切换router的组件的
<Route path="/login" component={Login}/>    根据网址来加载对应的组件

 路由器包括路由。

路由是什么？
    就是一个key：value的映射关系

路由的分类：
1、后台路由： path —— callback
2、前台路由： path —— component

作用：
后台路由： 当服务器接收到请求时，根据请求的path找到对应的路由，有路由的回调函数来处理请求，返回响应
前台路由： 当亲故某个路由地址时，根据请求的path找到对用的路由，显示路由对应的组件界面
 */