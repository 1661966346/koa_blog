const app = require('../koa')
const user = require('./routers/user')
const readDir = require('require-directory')
const Router = require('koa-router')

const visitor=(obj)=>{
    //待优化
    //目前只支持一层
    if(obj instanceof Router){
        app.use(obj.routes())
        console.log(obj)
    }
}

//第一个固定module
//第二个：要读取的目录
//第三个：可以理解成完成一个的回调
readDir(module,'./routers',{visit:visitor})
