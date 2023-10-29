const inquirer = require("inquirer");
const fs = require("fs");
const shape = require("./lib/shape");
const shapeOpt = require("./lib/shapeOpt");
const colorKeywords = require("./lib/colors");
const fileName = "./examples/newLogo.svg";

const questions = [
  {
    type: "list",
    message: "Pick a logo shape.",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    message:
      "Please enter a color name or hexidecimal of what color would you like the shape to be.W3 Schools can be referenced for a full list of names.",
    name: "shapeColor",
  },
  {
    type: "input",
    message:
      "Please enter a color name or hexidecimal of what color would you like the text to be.",
    name: "textColor",
  },
  {
    type: "input",
    message: "Pick no more than three letters to appear in the text.",
    name: "text",
  },
];
function newLogo(response) {
  const svg = shapeOpt(response);
  fs.writeFile(fileName, svg, () => console.log("Check out your new logo in newLogo.svg"));
}

// function writeToFile(fileName, data) {
//     const shape = new shape ();
//   fs.writeFile(fileName, data, function (err) {
//     console.log(fileName);
//     console.log(data);
//     if (err) {
//       return console.log(err);
//     } else {
//       console.log("Check out your new logo!");
//     }
//   });
// }

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      newLogo(response);
    })
}

init();
