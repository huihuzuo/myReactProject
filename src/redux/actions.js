/*包含所有action creator函数的模块*/

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST
} from "./action-types";
import {reqRegister,reqLogin,reqUpdateUser,reqUserList,reqUser} from "../api";


//显示错误信息的同步action
const errorMsg=(msg)=>({type:ERROR_MSG,data:msg});
//注册登录成功的同步action
const authSuccess=(user)=>({type:AUTH_SUCCESS,data:user});
//接收用户信息的同步action
const receiveUser=(user)=>({type:RECEIVE_USER,data:user});
//重置用户信息
export const resetUser = (msg) => ({type: RESET_USER, data: msg})
//用户列表
const receiveUserList=(users)=>({type:RECEIVE_USER_LIST,data:users});

//异步注册
export function register({username,password,password2,type}){
    //进行前台表单验证，如果不合法返回一个同步action对象，显示提示信息
    if(!username || !password || !type){
        return errorMsg("请正确输入用户名和密码")
    }if(password!==password2){
        return errorMsg("您输入的密码和确认密码不一致，请重新输入")
    }

    return async dispatch=>{
        //异步ajax请求，得到响应
        const response=await reqRegister({username,password,type})
        //得到响应体数据
        const result=response.data;
        //如果是正确的
        if(result.code===0){
            dispatch(authSuccess(result.data))
        }else{
            //分发提示错误的action
            dispatch(errorMsg(result.msg))
        }
    }

}

//异步登录
export const login=({username,password})=>{
    if(!username || !password){
        return errorMsg("用户密码输入错误")
    }
    return async dispatch=>{
        const response=await reqLogin({username,password});
        const result = response.data
        if(result.code===0){
            dispatch(authSuccess(result.data))
        }else{
            dispatch(errorMsg(result.msg))
        }
    }
};

//完善异步更新用户信息
export function updateUser(user){
    return async dispatch=>{
        // 1 发送异步ajax请求
      const response= await reqUpdateUser(user);
      const result=response.data;
        //2 根据结果分发同步的action
      if(result.code===0){
         dispatch(receiveUser(result.data))
      }else{
         dispatch(receiveUser(result.msg))
      }
    }
}

/*
异步获取用户
 */
export const getUser = () => {
  return async dispatch => {
    const response = await reqUser()
    const result = response.data
    if (result.code === 0) {
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}

//异步获取用户列表
export const getUserList=(type)=>{
  return async dispatch=>{
    const response = await reqUserList(type);
    const result = response.data;
    if(result.code===0){
       dispatch(receiveUserList(result.data))
    }


  }
}
