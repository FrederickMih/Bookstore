import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
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

  return (
    <>

      {filteredBooks.map((book) => (
        <Book key={book.id} book={book} handleDeleteBook={() => handleDeleteBook(book)} />

      ))}

    </>
  );
}

export default BooksList;
