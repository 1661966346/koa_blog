const KoaRouter = require('koa-router')
const router = new KoaRouter()
const uEmail = require('../../utils/email')
const emailcode = require('../../db/email-code')
//login
router.post('/login',async ctx=>{
    ctx.body = `login api`
})
//register
router.get('/register',async ctx=>{
    await ctx.render('register',{
        name:"xiaozuanzhen"
    })
    // console.log(ctx.query);
})

router.post('/register',async ctx=>{
    // console.log(ctx.request.body);
    // ctx.body = ctx.request.body;
})
router.get('/email/code',async ctx=>{
    const email = ctx.query.email
    const code = ctx.query.code
    if(email){
        uEmail.send(email,code)
        ctx.body=`已发送__success`
        let doc = new emailcode({
            email:email,
            code:code
        });

        doc.save().then(res=>{
            console.log("保存邮箱和验证码成功")
        }).catch(err=>{
            console.log(err);
        });

    }else{
        console.log("email不存在")
    }

})

router.post('/register/password',async ctx=>{
    
})

//logout
router.get('/logout',async ctx=>{
    ctx.body = `logout api`
})

module.exports = router