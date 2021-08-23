import React from 'react';

const BooksForm = () => {
  const categories = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'History',
    'English'
  ];

  return (
    <>
      <form action="">
        <input type="text" id="title" placeholder="title here" />
        <select name="category">
          {categories.forEach((item) => (
            <option>{item}</option>
          ))}
        </select>
        <button type="submit">Submit for</button>
      </form>
    </>
  );
};

export default BooksForm;
