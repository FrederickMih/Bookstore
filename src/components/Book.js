import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { id, title, category } = book;
  return (
    <div>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
      </tr>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.InstanceOf(Object).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default Book;
