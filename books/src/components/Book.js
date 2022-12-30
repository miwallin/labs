const Book = ({book}) => {

    const coverLink = 'https://covers.openlibrary.org/b/olid/' + book.ol + '-M.jpg'
  
    return (
        <div className="book-post">
            <img src={coverLink} height="120px" width="80px" />
            <div className="book-text">
                <h4>{book.title}</h4>
                <p>av {book.author}.</p>
                <p>Första utgåva: {book.year_written}</p>
            </div>
        </div>
    )
  }
  
  export default Book