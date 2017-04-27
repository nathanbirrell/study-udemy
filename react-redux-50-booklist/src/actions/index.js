export function selectBook(book) {
  // selectBook is an ActionCreator, needs to return an action (obj w/ type prop)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
