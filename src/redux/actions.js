/*包含所有action creator函数的模块*/

import {AUTH_SUCCESS, ERROR_MSG} from "./action-types";
import {reqRegister,reqLogin} from "../api";


//同步错误信息
const errorMsg=(msg)=>({type:ERROR_MSG,data:msg});
//同步成功的响应
const authSuccess=(user)=>({type:AUTH_SUCCESS,data:user});

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