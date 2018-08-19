/*
用户列表的UI组件
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Card, WingBlank, WhiteSpace} from 'antd-mobile'

const Header = Card.Header;
const Body = Card.Body;

//用户列表的UI组件
class UserList extends Component{
  static propTypes={
    userList: PropTypes.array.isRequired
  };
   render(){
     return (
       <WingBlank style={{marginTop:50,marginBottom:50}}>
         {
           this.props.userList.map(user => (
             <div key={user._id}>
               <WhiteSpace/>
               <Card>
                 <Header
                   thumb={user.header ? require(`../../assets/images/${user.header}.png`) : null}
                   extra={user.username}
                 />
                 <Body>
                 <div>职位: {user.post}</div>
                 {user.company ? <div>公司: {user.company}</div> : null}
                 {user.salary ? <div>月薪: {user.salary}</div> : null}
                 <div>描述: {user.info}</div>
                 </Body>
               </Card>
             </div>
           ))
         }
       </WingBlank>
     )
   }
}

export default UserList