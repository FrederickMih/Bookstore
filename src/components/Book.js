import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;
  return (
    <div>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <button type="button" onClick={handleRemoveBook}>
          Delete Book
        </button>
      </tr>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
