const Square = require('../lib/square');
 
 // A testing suite for Square is created.
 describe('Square', () => {
    it('should return a sqaure shaped logo, color choice for both logo and text, and text entry', () => {
      const square = new Square ("blue", "white"," VPG");
      expect(square.render()).toEqual(`
      <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="blue"/>
      <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">VPG</text>
  </svg>

  
        
      `);
    });
  });