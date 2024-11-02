// Завдання 4.2

let length = 0.5;
let width = 8;
function rectangleArea (length, width){
    let result = length*width;
    if (result == result.toFixed(0)) {
        return result.toFixed(0);
    } else {
        return result.toFixed(2);
    }
}

console.log(rectangleArea(length,width))