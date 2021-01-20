const app = require('./koa')
const conf = require('./config')
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const views = require('koa-views')
//ejs模板引擎需要写在router前面---容易忽略
app.use(views('views',{
    map:{
        html:'ejs'
    }
}))
const router = require('./router')
app.use(ctx=>{
    ctx.body = "hello Koa博客内容管理系统"
})
app.listen(conf.server.port,()=>{
   
    console.log(`server run at http://localhost:${conf.server.port} `)
    
})
