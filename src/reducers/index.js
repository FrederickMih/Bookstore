import { combineReducers } from 'redux';
import booksReducers from './books';

const rootReducer = combineReducers({
  booksReducers,
});

export default rootReducer;
