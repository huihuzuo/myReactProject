
import React,{Component} from "react";
import PropTypes from "prop-types";
import {Grid,List} from "antd-mobile"

export default class HeaderSelector extends Component{
  //声明一下laoban-info里面的setHeader是个函数
   static propTypes={
     setHeader:PropTypes.func.isRequired
   };
   state={
     icon:null,//当前选择的头像图片对象
   }


  constructor(props){
    super(props);
    //初始化需要显示的列表数据
    this.headerList=[];
    for(var i=0;i<20;i++){
      const text = `头像${i+1}`;
      const icon = require(`../../assets/images/${text}.png`); /*commonJs的写法*/
      this.headerList.push({icon,text});
    }

  }
  selectHeader=(icon,text)=>{ //item是个对象，item:{icon,text}
    //设置头像名称
    //设置当前头像图片对象
    this.setState({icon});
    this.props.setHeader(text)
  };
  render(){
    //根据状态中的icon决定显示的头部界面
    const {icon}=this.state;
    const head = icon ? <p>已选择头像: <img src={icon} alt="header"/></p> : "请选择头像"
    return(
      <div>
        <List RenderHeader={()=>head}>
          <Grid data={this.headerList} columnNum={5} onClick={this.selectHeader}/>
        </List>
      </div>
    )
  }
}