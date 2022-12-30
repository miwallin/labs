import { useState } from "react"

const Book = ({book}) => {

    const coverLink = 'https://covers.openlibrary.org/b/olid/' + book.ol + '-M.jpg';
    const [selected, isSelected] = useState(false);

    return (
        <div 
            className={`book-post ${selected ? 'selected' : ''}`}  
            onClick={() => { isSelected(chosen => !chosen) }}
        >
            <img src={coverLink} height="120px" width="80px" alt="omslagsbild" />
            <div className="book-text">
                <h3>{book.title}</h3>
                <span>av {book.author}.</span>
                <p>Första utgåva: {book.year_written}</p>
            </div>
        </div>
    )
  }
  
  export default Book