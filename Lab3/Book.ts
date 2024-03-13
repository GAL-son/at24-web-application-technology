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