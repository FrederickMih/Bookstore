import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const books = useSelector((state) => state);

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
            <Book key={mybook.id} book={mybook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
