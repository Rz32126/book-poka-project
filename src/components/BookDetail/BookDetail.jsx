import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../../utility/addToDB';

const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();
    
    
    const book = data.find(book => book.bookId === id);
    
    const {bookId: currentBookId, image} = book;

    const handleMarkAsRead = (id) => {
         addToStoreReadList(id);
    }

    return (
        <div className='my-12'>
            <h2>Book details: {bookId}</h2>
            <img className='w-36 my-7' src={image} alt=""/>
            <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-outline mr-4'>Read</button>
            <button className='btn bg-green-400'>Wishlist</button>
        </div>
    );
};

export default BookDetail;