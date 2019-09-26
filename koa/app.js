const koa=require('koa')
var Router = require('koa-router');
const koaBody = require('koa-body');
var app = new koa();
var router = new Router();
app.use(koaBody());

const Mysql = require('./mysql.js')

router.post('/login',async (ctx, next) => {
    // console.log(ctx.request.body)
    const {username,password}=ctx.request.body
    // console.log(username)
    let result= await Mysql.query(`select * from user where username='${username}' and password=${password}`)
    console.log(result.length)
    if(result.length){
        ctx.body={
            msg:"登陆成功",
            code:1,
            result
        }
    }else{
        ctx.body={
            msg:"没有此用户",
            code:0
        }
    }
       
     
  });
  

  router.post('/registry',async (ctx, next) => {
    const {username,password}=ctx.request.body
    let result= await Mysql.query(`insert into user(username,password) values ('${username}',${password})`)
    console.log(result)
        ctx.body={
            msg:"注册成功",
            code:1,
            result
        }
     
  }); 

  router.get('/list',async (ctx, next) => {
   
    let result= await Mysql.query('select * from user')
    console.log(result)
        ctx.body={
            msg:"加载成功",
            code:1,
            result
        }
     
  }); 
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8686,()=>{
    console.log('port is run at 8686')
})