import React from "react";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookName, image, author,category,rating } = book;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm border p-4 rounded-lg">
        <figure className="bg-gray-200 w-2/3 mx-auto p-4 rounded-xl mt-3">
          <img className=" h-40 mx-auto " src={image} alt="bookImg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold">{bookName}</h2>
          <p className="font-semibold">By:
           {author}
          </p>
          <hr class="border-0 border-t-2 border-dashed border-gray-300 m-3"></hr>
          <div className="flex justify-between items-center">
            <span>{category}</span>
            <div className="flex justify-between gap-2">
              <span className="font-semibold">{rating} </span>
              <span className="mt-1"><FaRegStar /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
