import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onClick }) => {
  const { id, title, category } = book;
  return (
    <div>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <button type="button" onClick={onClick}>
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
  onClick: PropTypes.func.isRequired,
};

export default Book;
