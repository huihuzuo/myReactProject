import React, {Component} from 'react'
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/actions'

/*
注册路由组件
 */
 class Register extends Component {

  // 初始化状态
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'dashen' // dashen: 大神, laoban: 老板
  }

  // 跳转到登陆
  toLogin = () => {
    // 编程式路由导航(通过纯js实现路由跳转)
    this.props.history.replace('/login')
  }

  // 请求注册
  register = () => {
    this.props.register(this.state)
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }

  render () {
    const {type} = this.state;
    const {redirectTo,msg}=this.props;
      if(redirectTo) {
          return <Redirect to={redirectTo}/>
      }
    return (
      <div>
        <NavBar>用户注册</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem type='text' placeholder='请输入用户名'
                       onChange={(val) => this.handleChange('username', val)}>用户名: </InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码'
                       onChange={(val) => this.handleChange('password', val)}>密码: </InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入确认密码'
                       onChange={(val) => this.handleChange('password2', val)}>确认密码: </InputItem>
            <WhiteSpace/>
            <List.Item>
              <span>用户类型: </span>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='laoban'} onChange={() => {this.handleChange('type', 'laoban')}}>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='dashen'} onChange={() => {this.handleChange('type', 'dashen')}}>大神</Radio>
            </List.Item>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default connect(
    state=>state.user,
    {register}
)(Register)