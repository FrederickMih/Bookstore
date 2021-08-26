import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import changeFilter from '../actions/index';
import * as myConst from '../constants';

function BooksList() {
  const filter = useSelector((state) => state.filter);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  let filteredBooks = books;
  filteredBooks = books.filter((book) => (filter === 'All' ? books : book.category === filter));

  const handleDeleteBook = (book) => {
    dispatch({ type: myConst.REMOVE_BOOK, book });
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>

      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Category</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <Book key={book.id} book={book} handleDeleteBook={() => handleDeleteBook(book)} />

          ))}
        </tbody>

      </table>
    </>
  );
}

export default BooksList;
