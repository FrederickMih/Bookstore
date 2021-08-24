import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as myConst from '../constants';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('category');
  const dispatch = useDispatch();
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleOptionChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const book = { id: Math.floor(Math.random() * 1000), title, category };
    dispatch({ type: myConst.CREATE_BOOK, book });
    setCategory('category');
    setTitle('');
  };

  return (
    <>
      <form action="" onSubmit={handleSubmitForm}>
        <input
          type="text"
          id="title"
          placeholder="title here"
          onChange={handleChange}
          value={title}
        />
        <select name="category" value={category} onChange={handleOptionChange}>
          {categories.forEach((item) => (
            <option key={Math.random() * 1000}>{item}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default BooksForm;
