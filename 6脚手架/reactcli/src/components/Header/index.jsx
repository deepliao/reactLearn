import React, { Component } from 'react'
import '../../App.css'
export default class Header extends Component {
    handleKeyUp=(event)=>{
        //enter 键盘码值为13
        if(event.keyCode !== 13) return
        this.props.addTodo(event.target.value)
        //子组件给父组件传递数据
        //父通过props给子传递函数，子调用函数给父亲传递
    }
    render() {
        return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
        )
    }
}
