// 该文件专门用于暴露一个store对象，整个应用全局只有一个
//引入createStore，用于创建redux中最为核心的store服务
import {createStore} from 'redux'
//引入为count服务的reducer
import countReducer from './count_reducer'
//暴露store
export default createStore(countReducer)
