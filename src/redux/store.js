/*
redux最核心的store对象模块
 */

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from "./reducers"
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

/*
composeWithDevTools   协调工具，在F12下的redux中右侧的state，用来查看state的变化的

redux是同步的，ajax和定时器都是异步的，通过applyMiddleware应用中间件把同步的转化成异步的
但applyMiddleware还需要thunk配合使用，thunk是用来实现异步操作的


 */

