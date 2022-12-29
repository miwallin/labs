const Book = ({book}) => {
    
    return (
        <div className="book-post">
            <h4>{book.title}</h4>
            <p>av {book.author}.</p>
            <p>Första utgåva: {book.year_written}</p>
        </div>
    )
  }
  
  export default Book