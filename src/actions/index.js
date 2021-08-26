import createBook from './createBook';
import removeBook from './removeBook';
import changeFilter from './changeFilter';

const combinedActions = () => ({
  createBook,
  removeBook,
  changeFilter,
});

export default combinedActions;
