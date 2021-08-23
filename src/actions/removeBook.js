const REMOVE_BOOK = 'REMOVE_BOOK';

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book
});

export default removeBook;
