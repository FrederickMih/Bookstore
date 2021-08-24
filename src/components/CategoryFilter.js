import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CategoryFilter = () => {
  const { filter, setFilter } = useState('All');
  const dispatch = useDispatch();

  return (
     <div>
        <select id="" value={filter} onChange={(e) => handleFilterChange(e)}></select>
     </div>
  )
};
