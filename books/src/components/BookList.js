import Book from './Book';

const BookList = ({books}) => {
    if (!books.length) {
        return <p>Det finns inga böcker i listan</p>;
    }

    return (
        <div>
            <h2>Boklista</h2>
            {
                books && books.map(book => <Book key={book.id} book={book}/>)
            }
        </div>
    )
  }
  
  export default BookList