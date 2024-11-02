// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, , age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

import chalk from 'chalk';

const users = [
    { name: "Kate", email: "kateryna.naimark@gmail.com", age: 35, gender: "female" },
    { name: "Vladyslav", email: "vladyslav.naimark@gmail.com", age: 40, gender: "male" },
    { name: "Alice", email: "alice.naimark@gmail.com", age: 2, gender: "female" }
  ];

  for (const {name: userName, email: userEmail, age: userAge, gender: userGender} of users) {
    console.log(`${userName} is ${userAge} years old, email is: ${chalk.red.bold(userEmail)} and gender is ${userGender}`);
  }
  