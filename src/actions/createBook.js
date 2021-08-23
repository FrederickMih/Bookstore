import * as myConst from '../constants';

const createBook = (book) => ({
  type: myConst.CREATE_BOOK,
  payload: book,
});

export default createBook;
