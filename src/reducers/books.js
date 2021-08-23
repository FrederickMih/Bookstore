import * as myConst from '../constants';

const booksReducers = (state, action) => {
  switch (action.type) {
    case myConst.CREATE_BOOK:
      return [...state, action.book];
    case myConst.REMOVE_BOOK:
      return [...state.filter((book) => book !== action.book)];
    default:
      return state;
  }
};

export default booksReducers;
