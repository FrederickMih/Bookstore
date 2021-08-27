import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Comments from './Comments';
import '../styles/book.css';

const Book = ({ book, handleDeleteBook }) => {
  const { title, category } = book;

  const [toggleComments, setToggleComments] = useState(false);

  const handleCommentsClick = () => {
    setToggleComments(!toggleComments);
  };

  return (
    <>
      <div className="item">
        <div className="left">
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="author">fred Mih</p>
          <div className="action-buttons">
            <button type="button" className="item-link" onClick={handleCommentsClick}>Comments</button>
            <button type="button" className="item-link remove" onClick={handleDeleteBook}>Remove</button>
          </div>
        </div>
        <div className="right">
          <p className="current right-element">Current Chapter</p>
          <p className="chapter right-element">Book chap</p>
          <button className="right-element btn btn-primary chapter-btn" type="button">UPDATE PROGRESS</button>

        </div>

      </div>
      <Comments setToggleComments={setToggleComments} toggleComments={toggleComments} />
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,

  }).isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
};

export default Book;
