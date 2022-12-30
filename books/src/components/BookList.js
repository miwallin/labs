import Book from './Book';

const BookList = ({books}) => {
    if (!books.length) {
        return <p>Det finns inga böcker i listan</p>;
    }

    return (
        <div className="list-container">
            {
                books && books.map(book => <Book key={book.ol} book={book} />)
            }
        </div>
    )
  }
  
  export default BookList