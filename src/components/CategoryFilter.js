import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CategoryFilter = () => {
  const { filter, setFilter } = useState('All');
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <select value={filter} onChange={(e) => handleFilterChange(e)} >

      </select>
    </div>
  );
};
