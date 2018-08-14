import React,{Component} from "react";
import {connect}from "react-redux";

//老板信息完善路由组件
class LaobanInfo extends Component{
  render(){
    return(
      <div>
         LaobanInfo
      </div>
    )
  }

}

export default connect(
  state=>({})
)(LaobanInfo)
