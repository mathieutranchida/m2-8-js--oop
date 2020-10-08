// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
  }
}

let book1 = new Book("book1", "genre1", "author1");
let book2 = new Book("book2", "genre2", "author2", true);
let book3 = new Book("book3", "genre3", "author3", false);
let book4 = new Book("book4", "genre4", "author4");
let book5 = new Book("book5", "genre5", "author5", true);

console.log(book1, book2, book3, book4, book5);

// Book {
//     title: 'book1',
//     genre: 'genre1',
//     author: 'author1',
//     isRead: false } Book {
//     title: 'book2',
//     genre: 'genre2',
//     author: 'author2',
//     isRead: true } Book {
//     title: 'book3',
//     genre: 'genre3',
//     author: 'author3',
//     isRead: false } Book {
//     title: 'book4',
//     genre: 'genre4',
//     author: 'author4',
//     isRead: false } Book {
//     title: 'book5',
//     genre: 'genre5',
//     author: 'author5',
//     isRead: true }
