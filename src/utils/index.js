//包含n个工具函数的模块

//点击注册登录完后，当前注册的是大神的话，看到是老板的界面，繁反之是大神的界面
//包含四个方面：1：老板主界面/laoban，2：大神主界面/dashen 3：老板信息完善界面/dasheninfo，4：大神信息完善界面/laobaninfo
//得到一个重定向的跳转的路径
//header头像名称

/*
注册laoban--> /laobaninfo
注册大神--> /dasheninfo
登陆laoban --> /laobaninfo 或者 /laoban
登陆大神 --> /dasheninfo 或者 /dashen
 */

export function getRedirectPath(type,header){
  let path="";
  //根据type得到path
  if(type==="dashen"){
    path="/dashen"
  }else{
    path="/laoban"
  }

  //如果header没有值，则要加info
  if(!header){
    path+="info";
  }

  return path
}