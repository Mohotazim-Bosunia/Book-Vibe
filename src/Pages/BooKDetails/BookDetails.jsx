import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singlebook = data.find((book) => book.bookId === bookId);
  const { bookName, image, author, category, rating ,review} = singlebook;

  // console.log(singlebook);
  return (
    <div className="mt-27 flex justify-between gap-10">
      <div className="">
        <img className="w-90 bg-gray-300 p-15 rounded-xl" src={image} alt="bookImg" />
      </div>
      <div>
        <span className="font-semibold text-2xl">{bookName}</span>
        <p>By: {author}</p>
        <hr className="border-0 border-t-2 border-dashed border-gray-300"></hr>
        <p>{category}</p>
        <hr className="border-0 border-t-2 border-dashed border-gray-300"></hr>
        <p><span className="font-semibold">Review:</span>{review}</p>
      </div>
    </div>
  );
};

export default BookDetails;
