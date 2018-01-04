import {normalize} from 'normalizr';
import {BOOK_FETCHED, BOOK_CREATED, BOOK_MAKE_FINISH, BOOK_REMOVED} from './types';
import api from './api';
import {bookSchema} from '../schemas';

const booksFetched = (data) => ({type: BOOK_FETCHED, data});

const bookCreated = (data) => ({type: BOOK_CREATED, data});

const bookFinished = (data) => ({type: BOOK_MAKE_FINISH, data});

const bookRemoved = (data) => ({type: BOOK_REMOVED, data});

export const fetchBooks = () => (dispatch) => api.books.fetchAll().then(books => {
  dispatch(booksFetched(normalize(books, [bookSchema])));
});

export const createBook = (data) => (dispatch) => api.books.create(data).then(book => dispatch(bookCreated(normalize(book, bookSchema))));

export const makeBookFinish = (data) => (dispatch) =>
  api.books.makeBookFinish(data).then(books => {
  dispatch(bookFinished(normalize(books, bookSchema)));
  return books;
});

export const removeBook = (data) => (dispatch) => {
  api.books.removeBook(data).then(book => {
    dispatch(bookRemoved(normalize(book, [bookSchema])));
  });
}
