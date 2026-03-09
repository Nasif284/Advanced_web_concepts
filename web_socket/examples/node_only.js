const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

console.log("WebSocket server running on port 3000");

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received:", message.toString());

    ws.send("Server received: " + message);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

const WebSocket = require("ws")

const wss = new WebSocket.Server({ port: 3000 })

console.log("WebSocket server running on port 3000")

wss.on("connection", (ws) => {

  console.log("Client connected")

  ws.on("message", (message) => {

    console.log("Received:", message.toString())

    ws.send("Server received: " + message)

  })

  ws.on("close", () => {
    console.log("Client disconnected")
  })

})


{/* <script> */}

const socket = new WebSocket("ws://localhost:3000")

socket.onopen = () => {
  socket.send("Hello server")
}

socket.onmessage = (e) => {
  console.log("Server:", e.data)
}

// </script>