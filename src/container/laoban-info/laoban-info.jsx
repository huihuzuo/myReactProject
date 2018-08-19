import React,{Component} from "react";
import {connect} from "react-redux";
import {NavBar,List,WingBlank,InputItem,TextareaItem,Button} from "antd-mobile"
import HeaderSelector from "../../components/header-selector/header-selector"
import {updateUser} from "../../redux/actions"
import {Redirect} from 'react-router-dom'
//老板信息完善路由组件
 class LaobanInfo extends Component{
   state = {
     header: '', // 头像名称
     info: '', // 职位简介
     post: '', // 职位名称
     company: '', // 公司名称
     salary: '' // 工资
   };

   setHeader=(header)=>{
       this.setState({header})
   };
   handleChange=(name,val)=>{
       this.setState({[name]:val})
   };
   //点击保存信息，跟redux交互
   save=()=>{
     this.props.updateUser(this.state)
   };
  render(){
    const {user}=this.props;
    //如果用户信息已经完善，自动跳转到laoban主界面
    if(user.header){
      return    <Redirect to="/laoban"/>
    }
    return(
      <div>
         <NavBar >老板信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <WingBlank>
          <List>
            <InputItem onChange={val=>{this.handleChange("post",val)}}>招聘职位：</InputItem>
            <InputItem onChange={val=>{this.handleChange("company",val)}}>公司名称：</InputItem>
            <InputItem onChange={val=>{this.handleChange("salary",val)}}>职位薪资：</InputItem>
            <TextareaItem title="职位要求：" onChange={val=>{this.handleChange("info",val)}}  rows={3}/>
            <Button type="primary" onClick={this.save}>保存</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default connect(
    state=>({user:state.user}),
    {updateUser}
)(LaobanInfo)