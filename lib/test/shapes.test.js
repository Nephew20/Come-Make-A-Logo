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
      expect(shape.CYPoint).toBe(90)
    });
});;

// Test for Square Class
describe('Square Class', () => {
  it('Should initialize a square with the given properties', () => {
    //setting up info to actually do the test
    const shape = new Square ("add","white","blue",100,100);
    
    // Test to be ran
    expect(shape.text).toBe("add");
    expect(shape.textColor).toBe("white");
    expect(shape.shapeColor).toBe("blue");
    expect(shape.width).toBe(100);
    expect(shape.height).toBe(100)
  });
});;

