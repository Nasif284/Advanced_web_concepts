const worker = new Worker("./worker.js");
document.getElementById("start").onclick = () => {
  worker.postMessage(10);
};
worker.onmessage = (e) => {
  console.log(e.data);
};
