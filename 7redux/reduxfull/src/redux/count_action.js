//该文件专门为Count组件生成action对象
export function createIncrementAction(data){
    return {type: 'increment' , data} 
}
export function createDecrementAction(data){
    return {type: 'dncrement' , data} 
}