import { io } from "socket.io-client"

const socket = io("http://localhost:3000")

socket.emit("message","Hello")

socket.on("message",(msg)=>{
  console.log(msg)
})

Server:

const { Server } = require("socket.io")

const io = new Server(3000)

io.on("connection", socket => {

  socket.on("message", msg => {
    io.emit("message", msg)
  })

})


const socket = new WebSocket("ws://localhost:3000")

socket.onopen = () => {
  socket.send("Hello Server")
}

socket.onmessage = (event) => {
  console.log(event.data)
}

Server (Node):

const WebSocket = require("ws")

const wss = new WebSocket.Server({ port: 3000 })

wss.on("connection", ws => {
  ws.on("message", msg => {
    ws.send("Received: " + msg)
  })
})