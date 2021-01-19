const Koa = require('koa')
const app = new Koa()
const conf = require('./config')
app.use(ctx=>{
    ctx.body = "hello Koa博客内容管理系统"
})
app.listen(conf.server.port,()=>{
   
    console.log(`server run at http://localhost:${conf.server.port} `)
    
})
