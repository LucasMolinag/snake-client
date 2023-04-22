const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Name: LMG");

  // setInterval(() => {  
  //     conn.write("Move: up");
  //   }, 2000);
  });

  // conn.on("connect", () => {
  //   conn.write("Move: down");
  // })

  // conn.on("connect", () => {
  //   conn.write("Move: left");
  // })

  // conn.on("connect", () => {
  //   conn.write("Move: right");
  // })

  conn.on("data", (data) => {
    console.log(data.toString())
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server. Have fun!")
  })

  return conn;
};

console.log("Connecting ...");
connect();