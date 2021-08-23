import React from 'react';

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
