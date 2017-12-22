import { normalize } from 'normalizr';
import { BOOK_FETCHED, BOOK_CREATED } from './types';
import api from './api';
import { bookSchema } from '../schemas';

const booksFetched = (data) => ({
  type: BOOK_FETCHED,
  data
});

const bookCreated = (data) => ({
  type: BOOK_CREATED,
  data
});

export const fetchBooks = () => (dispatch) =>
  api.books.fetchAll().then(books => {
    dispatch(booksFetched(normalize(books, [bookSchema])));
  });

export const createBook = (data) => (dispatch) =>
  api.books.create(data).then(book =>
    dispatch(bookCreated(normalize(book, bookSchema))));