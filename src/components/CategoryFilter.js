import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/CategoryFilter.css';
import * as myConst from '../constants';

const CategoryFilter = () => {
  const [filter, setFilter] = useState('All');
  const dispatch = useDispatch();

  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filter = e.target.value;
    dispatch({ type: myConst.CHANGE_FILTER, filter });
  };

  return (
    <div className="categories-div">
      <select onChange={(e) => handleFilterChange(e)} id="categories" className="categories-select" value={filter}>
        <option value="All">CATEGORIES</option>
        {categories.map((cat) => <option key={Math.random() * 1000}>{cat}</option>)}
      </select>
    </div>
  );
};

export default CategoryFilter;
