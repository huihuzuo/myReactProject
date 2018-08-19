/*
包含多个用于生成新的state的reducer函数的模块
 */

/*
包含多个用于生成新的state的reducer函数的模块
 */
import {combineReducers} from 'redux'
import {getRedirectPath} from "../utils";
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST
} from "./action-types";


const initUser={
    username: '', // 用户名
    type: '', // 类型
    msg: '', // 错误提示信息
    redirectTo: '' // 需要自动跳转的路由path
};
function user(state = initUser, action) {

    switch(action.type){
        case AUTH_SUCCESS:// 认证成功
          const user=action.data;
          return{...user, redirectTo:getRedirectPath(user.type,user.header) };
        case ERROR_MSG: // 错误信息提示
           const msg=action.data;
           return {...state, msg};
        case RECEIVE_USER:
            return action.data;
        case RESET_USER:
            return {...initUser,msg:action.data};
        default:
          return state
    }
}

const initUserList=[];
function userList(state=initUserList,action) {
  switch (action.type) {
     case RECEIVE_USER_LIST:
       return action.data;
     default:
       return state
  }
}

// 返回合并的reducer
export default combineReducers({
    user,
    userList
})


/*
  向外暴露一个整合后的reducers函数：function（state，action）{...}
  state的结构为 {xxx: xxx(), yyy:　yyy()}

 */
