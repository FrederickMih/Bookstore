import { combineReducers } from 'redux';
import booksReducers from './books';
import filter from './filter';

const rootReducer = combineReducers({
  booksReducers,
  filter,
});

export default rootReducer;
