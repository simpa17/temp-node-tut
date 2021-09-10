// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// modules - info about current module (file)
// process - info about env where the program is being executed

// console.log(__filename);
// setInterval(() => {
// 	console.log("hello world");
// }, 1000); // Ctrl + C to ends

// const names = require("./4-names");
// const sayHi = require("./5-utils");
// const data = require("./6-alternative-flavor");

// require("./7-mind-grenade");

// console.log(data);

// console.log(names);

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

//////////////////////////////////////////////////////////////////////
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);
