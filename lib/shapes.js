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
    constructor(text, textColor, shapeColor, XPoint, YPoint) {
        super(text, textColor, shapeColor)
        this.XPoint = XPoint
        this.YPoint = YPoint
    }
}







module.exports = Shapes