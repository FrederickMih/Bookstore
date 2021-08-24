import { option } from 'jest-validate/node_modules/@types/yargs';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as myConst from '../constants';

const CategoryFilter = () => {
  const { filter, setFilter } = useState('All');
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  dispatch({ type: myConst.CHANGE_FILTER, filter });

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

  return (
    <div>
      <select value={filter} onChange={(e) => handleFilterChange(e)}>
        {categories.map((catItems) => (
          <option key={Math.random() * 1000}>{catItems}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
