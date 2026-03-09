import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("chat-message", message);

    setMessage("");
  };

  return (
    <div>
      <h2>Socket.IO Chat</h2>

      <input value={message} onChange={(e) => setMessage(e.target.value)} />

      <button onClick={sendMessage}>Send</button>

      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
