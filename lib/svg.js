
//function to generate the shape
function logoShape(choice, color) {
    if (choice == 'Triangle') {
        return `<svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50 10, 90 90, 10 90" fill="${color}" />
      </svg>`
    } else if (choice == 'Square') {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="50" height="50" stroke="black" fill="${color}" stroke-width="5"/>
        </svg>`
    } else if (choice == 'Circle') {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="75" r="20" stroke="black" fill="${color}" stroke-width="5"/>`
    }

}


function generateSVG(data) {
    return `${logoShape(data.shape, data.shapeColor)}`
}

module.exports = generateSVG