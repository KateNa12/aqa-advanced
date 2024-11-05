// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу". 

// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook 
// (все те саме що і для Book але ще формат файлу). 
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo.

// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook.
//  В сеттерах необхідно додати валідацію для переданих значень. 
//  Використовуйте їх для зміни та отримання значень властивостей.

// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book
//  і формат файлу як рядок ****та повертати екземпляр класу EBook.

import Book from "./Book.js";

export default class EBook extends Book {
    constructor(title, author, year, fileType) {
        super(title, author, year); 
        this.fileType = fileType; 
    }

    get fileType(){
        return this._fileType;
    }

    set fileType(value) {
        const validFormats = ['EPUB', 'PDF', 'MOBI', 'TXT'];
    if (validFormats.includes(value)) {
      this._fileType = value;
    } else if (typeof value === 'string' || value.length > 0){
        this._fileType = value;
    } else{
        console.error(`Wrong fileType!: ${value}`)
        }
    }

    printInfo(){
        super.printInfo();
        console.log(`'Формат файлу: ${this.fileType}'`);
    }
    // Статичний метод для створення екземпляра EBook

    static createEBookFromBook(bookInstance, fileType) {
    if (!(bookInstance instanceof Book)) {
      console.error('Аргумент має бути екземпляром класу Book');
      return null;
    }

    // Перевірка, чи є формат файлу допустимим
    const validFormats = ['EPUB', 'PDF', 'MOBI', 'TXT'];
    if (!validFormats.includes(fileType)) {
      console.error(`Некоректний формат файлу: ${fileType}`);
      return null;
    }
    // Створюємо новий екземпляр EBook
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileType);
    
      }
    }

    

