import * as myConst from '../constants';

const createBook = (book) => ({
  type: myConst.EDIT_BOOK,
  book,
});
export default createBook;
