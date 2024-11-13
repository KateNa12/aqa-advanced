
// function declaration

function calculateRectangleArea(width,height){
  const result = width * height;
  return console.log(result);
}
calculateRectangleArea(5,10);


// function expression

const calculateRectangleArea2 = function(width,height){
  const result = width * height;
  return console.log(result);
};
calculateRectangleArea2(5,10);


// arrow function

const calculateRectangleArea3 = (width,height) => console.log(width * height);

calculateRectangleArea3(5,10);