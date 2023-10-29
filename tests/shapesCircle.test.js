const Circle = require('../lib/circle');

// A testing suite for Circle is created.
describe('Circle', () => {
    it('should return a circle shaped logo, color choice for both logo and text, and text entry', () => {
      const circle = new Circle ("purple", "goldenrod"," VPG");
      expect(circle.render()).toEqual(`

    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="purple" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="goldenrod">VPG</text>
  
  </svg>
        
      `);
    });
  });

 