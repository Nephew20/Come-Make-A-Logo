class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor, CXPoint, CYPoint) {
        super(text, textColor, shapeColor)
        this.CXPoint = CXPoint
        this.CYPoint = CYPoint
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor, XCoord, YCoord, ZCoord) {
        super(text, textColor, shapeColor)
        this.XCoord = XCoord
        this.YCoord = YCoord
        this.ZCoord = ZCoord
    }
}

class Square extends Shapes {
    constructor(text, textColor, shapeColor, width, height) {
        super(text, textColor, shapeColor)
        this.width = width
        this.height = height
    }
}

function logoShape(shape, shapeColor, text, textColor) {
    if (shape == 'Circle') {
        const cir = new Circle(text, textColor, shapeColor, 60, 55)
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${cir.CXPoint}" cy="${cir.CYPoint}" r="40" fill="${cir.shapeColor}"/>
        <text x="60" y="60" text-anchor="middle" fill="${cir.textColor}">${cir.text}</text>
        </svg>`
    } else if (shape == "Square") {
        const squ = new Square(text, textColor, shapeColor, 100, 100)
        return `<svg width="300" height="200"  version="1.1" xmlns="http://www.w3.org/2000/svg">
         <rect x="10" y="10" width="${squ.width}" height="${squ.height}" fill="${squ.shapeColor}"/>
         <text x="60" y="60" text-anchor="middle" fill="${squ.textColor}">${squ.text}</text>
         </svg>`
    } else {
        const tri = new Triangle(text, textColor, shapeColor, [50, 10], [90, 90], [10, 90])
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
         <polygon points="${tri.XCoord[0]} ${tri.XCoord[1]}, 
                        ${tri.YCoord[0]} ${tri.YCoord[1]}, 
                        ${tri.ZCoord[0]} ${tri.ZCoord[1]}" fill="${tri.shapeColor}"/>
         <text x="50" y="60" text-anchor="middle" fill="${tri.textColor}">${tri.text}</text>
       </svg>`
    }
}


function generateSVG(data) {
    return `${logoShape(data.shape, data.shapeColor, data.text, data.textColor)}`
}


module.exports = generateSVG