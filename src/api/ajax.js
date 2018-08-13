//使用axios封装ajax请求的函数模块
import axios from "axios";
export default function ajax(url,data={},type="GET"){
     //get请求
    if(type==="GET"){
      //根据data来拼query参数串
        let dataStr="";
        //Object.keys(data):得到指定对象自身所有属性名组成的数组【username,password】
        Object.keys(data).forEach(key=>{
            const value=data[key];
            dataStr += `${key}=${value}&`
        })
        if(dataStr!==""){//有参数，username=tom&password=123&
            dataStr=dataStr.substring(0,dataStr.length-1);//username=tom&password=123
            url+="?"+dataStr  //login?username=tom&password=123
        }
        return axios.get(url);

    }else{
        //post请求
        return axios.post(url,data)
    }
}