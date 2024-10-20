const { Circle, Square, Triangle, logoShape, generateSVG } = require('../shapes.js')

// Test for Circle SVG
describe('Circle Class', () => {
    it('Should initialize a circle with the given properties', () => {
      //setting up info to actually do the test
      const shape = new Circle("add","white","blue",100,90);
      
      // Test to be ran
      expect(shape.text).toBe("add");
      expect(shape.textColor).toBe("white");
      expect(shape.shapeColor).toBe("blue");
      expect(shape.CXPoint).toBe(100);
      expect(shape.CYPoint).toBe(90);
    });
});;

// Test for Square Class
describe('Square Class', () => {
  it('Should initialize a square with the given properties', () => {
    //setting up info to actually do the test
    const shape = new Square("add","white","blue",100,100);
    
    // Test to be ran
    expect(shape.text).toBe("add");
    expect(shape.textColor).toBe("white");
    expect(shape.shapeColor).toBe("blue");
    expect(shape.width).toBe(100);
    expect(shape.height).toBe(100);
  });
});;

// Test for triangle class
describe('Triangle Class', () => {
  it('Should initialize a triangle with the given properties', () => {
    //setting up info to actually do the test
    const shape = new Triangle("add","white","blue",[50, 10], [90, 90], [10, 90]);
    
    // Test to be ran
    expect(shape.text).toBe("add");
    expect(shape.textColor).toBe("white");
    expect(shape.shapeColor).toBe("blue");
    expect(shape.XCoord).toEqual([50, 10]);
    expect(shape.YCoord).toEqual([90, 90]);
    expect(shape.ZCoord).toEqual([10, 90]);
  });
});;

// Test for the Circle logoShape function
describe('logoShape Circle', () => {
  it('Should create a circle SVG with given values', () => {

    // Test to be run
    const svg = logoShape('Circle', 'red', 'asd', 'white');
    const test = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="55" r="40" fill="red"/>
        <text x="60" y="60" text-anchor="middle" fill="white">asd</text>
        </svg>`

        expect(svg).toBe(test)
  })
})

// Test for the Square logoShape function
describe('logoShape Square', () => {
  it('Should create a Square SVG with given values', () => {

    // Test to be run
    const svg = logoShape('Square', 'black', 'jkl', 'white')
    const test = `<svg width="300" height="200"  version="1.1" xmlns="http://www.w3.org/2000/svg">
         <rect x="10" y="10" width="100" height="100" fill="black"/>
         <text x="60" y="60" text-anchor="middle" fill="white">jkl</text>
         </svg>`

      expect(svg).toBe(test)
  });
});

// Test for the Triangle logoShape Function
describe('logoShape Triangle', () => {
  it('Should create a Triangle SVG with given values', () => {

    // Test to be run
    const svg = logoShape('Triangle', 'blue', 'qwe', 'yellow')
    const test = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
         <polygon points="50 10, 90 90, 10 90" fill="blue"/>
         <text x="50" y="60" text-anchor="middle" fill="yellow">qwe</text>
       </svg>`

       expect(svg).toBe(test)
  })
})