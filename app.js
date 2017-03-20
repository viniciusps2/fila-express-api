const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello Koa'
})

app.listen(process.env.PORT || 3000)
