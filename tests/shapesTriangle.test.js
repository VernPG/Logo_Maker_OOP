const Triangle = require("../lib/triangle");

// A testing suite for Triangle is created.
describe("Triangle", () => {
  it("should return a triangle shaped logo, color choice for both logo and text, and text entry", () => {
    const triangle = new Triangle("aqua", "pink", " VPG");
    expect(triangle.render()).toEqual(`
    <svg version="1.1" 
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
	<polygon points="100, 15 200, 200 0, 200" fill="aqua"/>
    <text x="100" y="185" font-size="70" text-anchor="middle" fill="pink">VPG</text> 
</svg>     
      `);
  });
});
