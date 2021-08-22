import React, { Component } from 'react'
import '../../App.css'
export default class Item extends Component {
    state = {mouse : false}
    
    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse : flag})
        }
    }
    handleCheck=(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }
    handleDelete=(id)=>{
        return ()=>{
            this.props.deleteTodo(id)
        }
    }
    // 指定事件回调返回值是函数
    render() {
        const {id,name,done}=this.props
        return (
            <li onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}
                style={{backgroundColor: this.state.mouse ? '#ddd' : 'white'}}
                >
            <label>
                {/* defaultChecked 默认选择，后续可更改 */}
                <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                <span>{id},{name},{done}</span>
            </label>
            <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:this.state.mouse ? 'block' :'none'}}>删除</button>
            </li>
        )
    }
}
