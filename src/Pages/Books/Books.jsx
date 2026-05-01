import React from 'react';
import Book from '../Book/Book';

const Books = ({booksData}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 mt-10'>
           {booksData.map(book => 
           <Book 
           book={book}
           key={book.bookId}
           >

           </Book>)}
        </div>
    );
};

export default Books;