const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

function shapeOpt(response){
    if(response.shape === "Circle"){
        let chosenShape = new Circle (response.shapeColor, response.textColor, response.text)
        return chosenShape.render()
    }
    if(response.shape === "Square"){
        let chosenShape = new Square (response.shapeColor, response.textColor, response.text)
        return chosenShape.render()
    }if(response.shape === "Triangle"){
        let chosenShape = new Triangle (response.shapeColor, response.textColor, response.text)
        return chosenShape.render()
    }
};

module.exports = shapeOpt