import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import * as myConst from '../constants';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const books = useSelector((state) => state);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  let filterBooks = books;
  if (filter !== 'All') {
    filterBooks = books.filter((thisBook) => thisBook.category === filter);
  }

  const handleRemoveBook = (book) => {
    dispatch({ type: myConst.REMOVE_BOOK, book });
  };

  return (
    <div>
      <CategoryFilter />
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
          {filterBooks && filterBooks.map((mybook) => (
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
