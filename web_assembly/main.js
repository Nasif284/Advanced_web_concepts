document.getElementById("run").onclick = async () => {
  const response = await fetch("add.wasm");
  const bytes = await response.arrayBuffer();
  const result = await WebAssembly.instantiate(bytes);
  const add = result.instance.exports.add;
  const output = add(5, 3);
  console.log("Result from WebAssembly:", output);
};


