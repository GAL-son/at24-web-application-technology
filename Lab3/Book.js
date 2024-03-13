function sumYears(books) {
    var sum = 0;
    books.forEach(function (book) {
        sum += book.publicationYear;
    });
    return sum;
}
var TestBook = /** @class */ (function () {
    function TestBook(title, publicationYear) {
        this.title = title;
        this.publicationYear = publicationYear;
    }
    return TestBook;
}());
var bookA = new TestBook("BookA", 1994);
var bookB = new TestBook("BookB", 2006);
console.log("bookA[" + bookA.publicationYear + "] + bookB[" + bookB.publicationYear + "] = " + sumYears([bookA, bookB]));
