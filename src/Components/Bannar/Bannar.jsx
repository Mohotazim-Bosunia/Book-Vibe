import React from 'react';
import bannarImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='mt-20 flex items-center justify-between gap-5'>
            <div>
              <h1 className='text-4xl'>Books to freshen up your bookshelf</h1>
              <button className='bg-amber-400'>View The List</button>
            </div>
            <div>
               <img src={bannarImg} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;