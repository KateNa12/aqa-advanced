// Завдання 4.3


let cylinderRadius = 2.25;
let cylinderHeight = 4.45;
let pi = Math.PI;

function cylinderVolume (cylinderRadius, cylinderHeight){
  return (pi * cylinderRadius * cylinderRadius * cylinderHeight).toFixed(2); 
}

console.log(cylinderVolume(cylinderRadius,cylinderHeight));