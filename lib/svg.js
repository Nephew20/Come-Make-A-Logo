
// //function to generate the shape
// function logoShape(shape,color,text,textColor) {
//     if (shape == 'Triangle') {
//         return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
//         <polygon points="50 10, 90 90, 10 90" fill="${color}"/>
//         <text x="50" y="60" text-anchor="middle" fill="${textColor}">${text}</text>
//       </svg>`
//     } else if (shape == 'Square') {
//         return `<svg width="300" height="200"  version="1.1" xmlns="http://www.w3.org/2000/svg">
//         <rect x="10" y="10" width="100" height="100" fill="${color}"/>
//         <text x="60" y="60" text-anchor="middle" fill="${textColor}">${text}</text>
//         </svg>`
//     } else if (shape == 'Circle') {
//         return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="60" cy="55" r="40" fill="${color}"/>
//         <text x="60" y="60" text-anchor="middle" fill="${textColor}">${text}</text>
//         </svg>`
//     }

// }


// function generateSVG(data) {
//     return `${logoShape(data.shape, data.shapeColor, data.text, data.textColor)}`
// }

// module.exports = generateSVG