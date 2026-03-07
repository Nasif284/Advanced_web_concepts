const socket = new WebSocket("ws://localhost:3000");

const input = document.getElementById("message");
const button = document.getElementById("send");
const messages = document.getElementById("messages");

socket.onopen = () => {
  console.log("connected to server");
};

socket.onmessage = (event) => {
  const li = document.createElement("li");
  li.textContent = event.data;
  messages.append(li);
};

button.onclick = () => {
  const text = input.value;

  socket.send(text);

  input.value = "";
};