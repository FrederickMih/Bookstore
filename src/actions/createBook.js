import * as myConst from '../constants';

const createBook = (book) => ({
  type: myConst.CREATE_BOOK,
  book,
});
export default createBook;
