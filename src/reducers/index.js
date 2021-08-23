import { combineReducers } from 'redux';
import booksReducers from './books';

const rootReducer = combineReducers({
  Books: booksReducers,
});

export default rootReducer;
