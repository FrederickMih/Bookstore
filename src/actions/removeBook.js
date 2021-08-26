import * as myConst from '../constants';

const removeBook = (book) => ({
  type: myConst.REMOVE_BOOK,
  book,
});

export default removeBook;
