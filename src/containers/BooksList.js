import React from 'react';
import { useSelector } from 'react-redux';

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
          </tr>
        </thead>
        <tbody>
          {books.map((mybook) => (
            <tr key={mybook.id}>
              <td>{mybook.id}</td>
              <td>{mybook.title}</td>
              <td>{mybook.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
