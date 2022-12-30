import { useState } from 'react'
import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

function App() {

  const [login, setStatus] = useState(false);
  const [books, markBook] = useState([
    {"ol": "OL3701478M", "title": "Northanger Abbey", "author": "Austen, Jane", "year_written": 1814, "edition": "Penguin", "price":  18.2},
    {"ol": "OL7357226M", "title": "War and Peace", "author": "Tolstoy, Leo", "year_written": 1865, "edition": "Penguin", "price":  12.7},
    {"ol": "OL24769029M", "title": "Anna Karenina", "author": "Tolstoy, Leo", "year_written": 1875, "edition": "Penguin", "price":  13.5},
    {"ol": "OL2228137M", "title": "Mrs. Dalloway", "author": "Woolf, Virginia", "year_written": 1925, "edition": "Harcourt Brace", "price":  25},
    {"ol": "OL372544M", "title": "The Hours", "author": "Cunnningham, Michael", "year_written": 1999, "edition": "Harcourt Brace", "price":  12.35},
    {"ol": "OL5578996M", "title": "Huckleberry Finn", "author": "Twain, Mark", "year_written": 1865, "edition": "Penguin", "price":  5.76},
    {"ol": "OL3561283M", "title": "Bleak House", "author": "Dickens, Charles", "year_written": 1870, "edition": "Random House", "price":  5.75},
    {"ol": "OL3969567M", "title": "Tom Sawyer", "author": "Twain, Mark", "year_written": 1862, "edition": "Random House", "price":  7.75},
    {"ol": "OL7358964M", "title": "A Room of One's Own", "author": "Woolf, Virginia", "year_written": 1922, "edition": "Penguin", "price":  29},
    {"ol": "OL25544380M", "title": "Harry Potter", "author": "Rowling, J.K.", "year_written": 2000, "edition": "Harcourt Brace", "price":  19.95},
    {"ol": "OL364041M", "title": "One Hundred Years of Solitude", "author": "García Márquez, Gabriel", "year_written": 1967, "edition": "Harper  Perennial", "price":  14.00},
    {"ol": "OL7576706M", "title": "Hamlet, Prince of Denmark", "author": "Shakespeare, William", "year_written": 1603, "edition": "Signet  Classics", "price":  7.95},
    {"ol": "OL26793280M", "title": "Lord of the Rings", "author": "Tolkien, J.R.R.", "year_written": 1937, "edition": "Penguin", "price":  27.45}
  ]);

  const signIn = () => {
    setStatus( true );
  }

  return (
    <div className="App">
      <Navbar login={login} signIn={signIn}/>
      <BookList books={books} />
    </div>
  );
}

export default App;