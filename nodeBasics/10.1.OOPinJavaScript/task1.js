import Book from "./Book.js";
import EBook from "./EBook.js";

class Task1 {
    static task1() {
        let book1 = new Book('Notre Dame de Paris', 'Victor Hugo', 1831, 'PDF');
        let book2 = new Book('Harry Potter', 'J.K. Rolling', 1997, 'txt');
        let book3 = new Book('Robinson Crusoe', 'Daniel Defoe', 1719, 'PDF');

        book1.printInfo();
        book2.printInfo();
        book3.printInfo();
    }

    static task2() {
        let ebook1 = new EBook('Paris', 'Victor Hugo', 1200, 'PDF');
        let ebook2 = new EBook('Harry Potter and smth', 'Rolling', 1977, 'txt');
        let ebook3 = new EBook('Robinson', 'Defoe', 1719, 'PDF');

        ebook1.printInfo();
        ebook2.printInfo();
        ebook3.printInfo();

    }
    // get & set
    static task3(){
        let ebook1 = new EBook('Paris', 'Victor Hugo', 1200, 'PDF');
        let ebook2 = new EBook('Harry Potter and smth', 'Rolling', 1977, 'txt');
        let book3 = new Book('Robinson', 'Defoe', 1719, 'PDF');

        // Використання сеттерів для зміни властивостей
        ebook1.title = "Сутінки";
        ebook2.author = 8;
        book3.year = 'number';

        ebook1.printInfo(); // Показуємо оновлену інформацію
        ebook2.printInfo();
        book3.printInfo();
    }

    static task4(){
        let book1 = new Book('Notre Dame de Paris', '', 1831, 'PDF');
        let book2 = new Book('Harry Potter', 'J.K. Rolling', 1997);
        let book3 = new Book('Robinson Crusoe', 'Daniel Defoe', 1719);
        let ebook1 = new EBook('Notre Dame', 'V. Hugo', 1831, 'PDF');
        // Масив книг
        const books = [book1, book2, book3, ebook1];

        // Виклик статичного методу findOldestBook
        const oldestBook = Book.findOldestBook(books);

        // Виведення результату
        if (oldestBook) {
        console.log("Найдавніша книга:");
        oldestBook.printInfo();
        }
    }
    static task5(){
        // Створення екземпляра класу Book
        let book1 = new Book("ABC", "Smb", 2000);

        // Використання статичного методу для створення EBook з класу Book
        let ebook1 = EBook.createEBookFromBook(book1, "EPUB");

        // Якщо створення було успішним, вивести інформацію про EBook
        if (book1) {
        ebook1.printInfo();
        }
    }
}

Task1.task1();
Task1.task2();
Task1.task3();
Task1.task4();
Task1.task5();






