const webSocket = require("ws")
const http = require('http')
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      const file = fs.readFileSync(path.join(__dirname, "public", "index.html"));
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(file);
    }

    if (req.url === "/client.js") {
      const file = fs.readFileSync(path.join(__dirname, "public", "client.js"));
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(file);
    }
})

const wss = new webSocket.Server({ server })

wss.on("connection", (ws) => {
    console.log("client connected")
    ws.on("message", (message) => {
        console.log(message.toString())
        wss.clients.forEach((client) => {
            if (client.readyState === webSocket.OPEN) {
                client.send(message.toString())
            }
        })
    })
    ws.on("close", () => {
        console.log("client disconnected")
    })
})

server.listen(3000, () => {
    console.log("server started")
})