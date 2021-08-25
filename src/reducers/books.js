import * as myConst from '../constants';

export const initState = [
  {
    id: Math.floor(Math.random() * 10),
    title: 'titleOne',
    category: 'Sci-Fi',
  },
  {
    id: Math.floor(Math.random() * 10),
    title: 'titleTwo',
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 10),
    title: 'titleThree',
    category: 'Biography',
  },
  {
    id: Math.floor(Math.random() * 10),
    title: 'titleFour',
    category: 'Kids',
  },
];

const booksReducers = (state = initState, action) => {
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
