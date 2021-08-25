import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    <div>
      <select onChange={(e) => handleFilterChange(e)} value={filter}>
        {categories.map((catItems) => <option key={Math.random() * 1000}>{catItems}</option>)}
      </select>
    </div>
  );
};

export default CategoryFilter;
