
const jsonserver=require('json-server')

const server=jsonserver.create()

const router=jsonserver.router("db.json")

const middleware=jsonserver.defaults()

const cors = require('cors')
server.use(cors());

const PORT=process.env.PORT||3800

server.use(router)
server.use(middleware)

server.listen(PORT,()=>{
    console.log("server is running at port 3800");
})
