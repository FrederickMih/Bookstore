const CREATE_BOOK = 'CREATE_BOOK';
const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book
});

export default createBook;
