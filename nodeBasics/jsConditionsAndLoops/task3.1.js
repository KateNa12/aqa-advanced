// Завдання 3.1: Генерація таблиці множення. 
// While

let number = 10;
let i = 1;
function generateMultiplicationTable () {
  while (i <= 10) { 
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
  }
}
generateMultiplicationTable ();