//该文件用于创建一个为count服务的reducer，reducer的本质就是一个函数
//reducer函数会接到两个函数,分别是：之前的状态(prestate)和动作对象(action)
const initState = 0
//形参默认值，undefined是initState，否则是preState
export default function countReducer(preState=initState,action){
    const {type,data} = action
    //根据type决定如何让加工数据
    switch (type) {
        case 'increment': //+
            return preState + data
        case 'dncrement': //-
            return preState - data    
        default:
            return preState
    }
}