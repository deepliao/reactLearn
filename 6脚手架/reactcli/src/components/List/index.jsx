import React, { Component } from 'react'
import Item from '../Item'
import '../../App.css'
export default class List extends Component {
    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                        //...todo批量传递
                    })
                }
            </ul>       
        )
    }
}
