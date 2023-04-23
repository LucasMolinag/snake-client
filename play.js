const net = require("net");             // imports net module for for creating an asynchronous TCP server
const connect = require("./client");    // imports the connect function from client.js - this connectes to the server
const setupInput = require("./input");  // imports the setupInput function from input.js - responsible for setting up the user input and handling commands

console.log("Connecting ...");          // prints a message letting us know it's connecting
const conn = connect();                 // establishes a connection to the server 

setupInput(conn);                       // passes conn object - used to set up user inputs and adds event listeners