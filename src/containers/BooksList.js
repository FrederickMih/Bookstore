import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import * as myConst from '../constants';

const BooksList = () => {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch({ type: myConst.REMOVE_BOOK, book });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Book ID</td>
            <td>Title</td>
            <td>Category</td>
            <td>Remove Book</td>
          </tr>
        </thead>
        <tbody>
          {books.map((mybook) => (
            <Book
              key={mybook.id}
              book={mybook}
              onClick={() => handleRemoveBook(mybook)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
