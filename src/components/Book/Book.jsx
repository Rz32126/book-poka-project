import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    
    const {bookId, image, bookName, author, tags, category} = book;

    return (
      <Link to={`/book/${bookId}`}>
           <div>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
         <figure className='bg-gray-300 py-8 rounded-2xl'>
          <img
         src={image}
         className='h-[166px] '
          alt="" />
          </figure>
  <div className="card-body">
    <div className='flex justify-center gap-3'>
      {
          tags.map((tag, index) => <button key={index}className="btn btn-xs text-lime-400">{tag}</button>)
      }
    </div>
    <h2 className="card-title">
      {bookName}
    </h2>
    <p>By: {author}</p>
    <div className='border-t-2 border-dashed'></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="badge"><div className="rating rating-md">
         <p className='font-bold text-xl'>5</p>
         <input type="radio" name="rating-9" className="rating-hidden" />
         <input type="radio" name="rating-9" className="mask mask-star-2" />
     </div></div>
    </div>
  </div>
</div>
        </div>
      </Link>
    );
};

export default Book;