import * as myConst from '../constants';

const removeBook = (book) => ({
  type: myConst.REMOVE_BOOK,
  payload: book,
});

export default removeBook;
