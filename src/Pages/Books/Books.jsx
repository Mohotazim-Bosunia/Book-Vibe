import React from 'react';
import Book from '../Book/Book';

const Books = ({booksData}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-15 mt-10'>
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