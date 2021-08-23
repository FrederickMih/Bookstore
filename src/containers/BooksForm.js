import React from 'react';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setcategory] = useState('action');
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
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleOptionChange = (e) => {
    e.preventDefault();
    setcategory(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
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
        <button type="submit">Submit for</button>
      </form>
    </>
  );
};

export default BooksForm;
