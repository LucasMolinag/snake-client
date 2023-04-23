const net = require("net");
const { IP, PORT } = require("./constants")

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // names snake
  conn.on("connect", () => {
    conn.write("Name: LMG");

  });
  // prints game over messages when idle or crashing
  conn.on("data", (data) => {
    console.log(data.toString())
  });

  // prints welcome message on successfull connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server. Have fun!")
  })

  return conn;
};

module.exports = connect;