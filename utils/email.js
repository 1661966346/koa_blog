const { request } = require("../koa");

const nodemailer = require('nodemailer')
const self ={user:`xiaozuanzhen@163.com`,pass:`OXYZAEYYEXJMMYAH`}

module.exports={
   async send(address,code){
        // 开启一个 SMTP 连接池 --发送者
        let transporter = nodemailer.createTransport({
            host: 'smtp.163.com',
            port: 465,
            secure: true, // secure:true for port 465, secure:false for port 587
            auth: {
                user:self.user,
                pass:self.pass,
            }
        });
        // 使用先前创建的传输器的 sendMail 方法传递消息对象
            let info= await transporter.sendMail({
                from:self.user,
                to:address||"1661966346@qq.com",
                subject:"node发送邮箱验证码--5分钟有效"+code,
                text:"您的邮箱验证码是" +code,
                html:"<b>您的邮箱验证码是" +code+"</b>",
            });
    }
}
