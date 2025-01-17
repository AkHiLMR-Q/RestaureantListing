//1 import json server

const jsonServer = require('json-server')


//2 create a server application using json server

const restServer= jsonServer.create()

//3 setup path for db.json

const router= jsonServer.router('db.json')

//4 return middleware

const middleWare= jsonServer.defaults()

//5 setup a port number

const port =2255

//6 use inrestServer

restServer.use(middleWare)
restServer.use(router)

//7 to run the server
restServer.listen(port,()=>{
    console.log("Restaurant server listening on port" + port);
})