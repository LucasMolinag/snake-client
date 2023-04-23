// setup interface to handle user input from stdin

let connection; // create variable that will be used by the setupInput function

// captures input from the player and decripts it into utf8 encoding to call on handleUserInput to execute an event for each input
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

// handles inputs from the player (wasd movementm n, o, t special communication keys, and ctrl + C to quit the game)
const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  } else if (data === "w") {
    console.log("Move: up")
    connection.write("Move: up");
  } else if (data === "a") {
    console.log("Move: left")
    connection.write("Move: left");
  } else if (data === "s") {
    console.log("Move: down")
    connection.write("Move: down");
  } else if (data === "d") {
    console.log("Move: right")
    connection.write("Move: right");
  } else if (data === "n") {
    connection.write("Say: Ssssweet!");
  } else if (data === "o") {
    connection.write("Say: Oof!")
  } else if (data === "t") {
    connection.write("Say: Sssstahp!")
  }
}

module.exports = setupInput;