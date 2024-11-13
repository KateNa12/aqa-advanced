// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook.
//  В сеттерах необхідно додати валідацію для переданих значень. 
//  Використовуйте їх для зміни та отримання значень властивостей.
// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання.
//  Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook).

export default class Book {
  constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title(){
    return this._title;
  }

  set title(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._title = value;
    } else {
      console.error(`Wrong title!: ${value}`); 
    }        
  }

  get author(){
    return this._author;
  }

  set author(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._author = value;
    } else{
      console.error(`Wrong author!: ${value}`);
    }
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value === 'number' && value > 0) {
      this._year = value;
    } else{
      console.error(`'Wrong year!: ${value}`);
    }
  }


  printInfo(){
    console.log(`'${this.title}' написана ${this.author}, видана у ${this.year}.`);
  }

  // Статичний метод для пошуку найстарішої книги
  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      console.error('Невірний масив книг');
      return null;
    }

    return books.reduce((oldest, currentBook) => {
      return (currentBook.year < oldest.year) ? currentBook : oldest;
    });
  }
}