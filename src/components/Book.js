import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ book, handleDeleteBook }) => {
  const { id, title, category } = book;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={handleDeleteBook}>Delete Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
};

export default Book;
