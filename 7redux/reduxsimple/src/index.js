import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))
//检测redux中的变化，只要变化，就刷新,这样对于所有组件都可以刷新
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
})