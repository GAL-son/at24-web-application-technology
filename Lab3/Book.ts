// Exc. 2
interface Book {
    title: string;
    author: string;
    publicationYear: number;
}

function sumYears(books: Array<Book>) {
    let sum: number = 0;
    books.forEach(book => {
        sum += book.publicationYear;
    });

    return sum;
}

class TestBook implements Book {
    title: string;
    author: string;
    publicationYear: number;

    constructor(title: string, publicationYear: number) {
        this.title = title;
        this.publicationYear = publicationYear;
    }
}

let bookA : Book = new TestBook("BookA", 1994);
let bookB : Book = new TestBook("BookB", 2006);

console.log("bookA[" + bookA.publicationYear + "] + bookB[" + bookB.publicationYear + "] = " + sumYears([bookA, bookB]));
