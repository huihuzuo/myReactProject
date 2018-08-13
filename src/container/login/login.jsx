import React, {Component} from 'react'
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/actions'
/*
登陆路由组件
 */

 class Login extends Component {

  // 初始化状态
  state = {
    username: '',
    password: '',
  }

  // 跳转到注册
  toRegister = () => {
    // 编程式路由导航(通过纯js实现路由跳转)
    this.props.history.replace('/register')
  }

  // 请求登陆
  login = () => {
    console.log(this.state)
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  };

  render () {
      const {redirectTo, msg} = this.props;
      if (redirectTo) {
          return <Redirect to={redirectTo}/>
      }
    return (
      <div>
        <NavBar>用户登陆</NavBar>
        <Logo/>
        <WingBlank>
            {msg ? <p className='error-msg'>{msg}</p> : null}
          <List>
            <InputItem type='text' placeholder='请输入用户名'
                       onChange={(val) => this.handleChange('username', val)}>用户名: </InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码'
                       onChange={(val) => this.handleChange('password', val)}>密码: </InputItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;陆</Button>
            <WhiteSpace/>
            <Button onClick={this.toRegister}>没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default connect(
    state => state.user,
    {login}
)(Login)