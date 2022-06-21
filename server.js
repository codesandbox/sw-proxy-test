const Koa = require("koa");
const cors = require("@koa/cors");
const app = (module.exports = new Koa());
app.use(cors({ credentials: true }));

app.use(async function (ctx) {
  console.log(ctx.headers);
  ctx.body = "Hello World";
});

if (!module.parent) app.listen(3000);
