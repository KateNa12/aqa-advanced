// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

let book = {
  title: 'Notre Dame de Paris',
  author: 'Victor Hugo',
  year: 1831
};

let {title: bookName, author: writer, year } = book;

console.log(bookName);
console.log(writer);