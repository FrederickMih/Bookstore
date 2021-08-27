import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/BooksForm.css';
import * as myConst from '../constants';

const BooksForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Category');
  const [error, setError] = useState('');

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  const handleOptionChange = (e) => {
    e.preventDefault();
    if (title !== '' && category !== 'Category') {
      const book = { id: Math.ceil(Math.random() * 1000), title, category };
      dispatch({ type: myConst.CREATE_BOOK, book });
      setCategory('Category');
      setTitle('');
      setError('');
    } else {
      setError('Title is empty?');
    }
  };

  return (
    <div className="form-div">
      <hr />
      <h3 className="form-title">Add New Book</h3>
      <form onSubmit={handleOptionChange} className="form">
        <input className="title-input form-control" type="text" id="title" placeholder="Book title" onChange={handleInputChange} value={title} />
        <select className="form-select" onChange={handleSelectChange} value={category} placeholder="Category">
          {categories.map((mycat) => <option key={Math.random() * 10}>{mycat}</option>)}

        </select>
        <button className="submit btn btn-primary chapter-btn" type="submit">Add Book</button>
      </form>
      <p className="error-p">{error}</p>
    </div>
  );
};

export default BooksForm;
