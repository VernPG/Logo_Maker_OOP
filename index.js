const inquirer =require('inquirer');
const fs = require('fs');
const shape = require("./lib/shape");
const colorKeywords= require("./lib/colors");

var questions = [
    {
        type: "list",
        message:"Pick a logo shape.",
        name:"shape",
        choices: ["Circle", "Sqaure", "Triangle"]
    },
    {
        type: "list",
        message:"What would you like the shape color to be",
        name:"shapeColor",
        choices: ["color keyword", "hexadecimal"]
    },
    {
        type: "list",
        message:"What color would you like the text to be?",
        name:"textColor",
        choices:["color keyword", "hexidecimal"]
    },
    {
        type: "input",
        message:"Pick no more than three letters to appear in the text",
        name:"text"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      console.log(fileName);
      console.log(data);
      if (err) {
        return console.log(err);
      } else {
        console.log("Check out your new logo!");
      }
    });
}  

function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("shape.js", shape(data));
        console.log(data);
    });
}
init();
