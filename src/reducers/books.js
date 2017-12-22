import { BOOK_FETCHED, BOOK_CREATED } from '../actions/types';
import { createSelector } from 'reselect';

export default function books(state = {}, action = {}) {
  switch (action.type) {

    case BOOK_FETCHED:
    case BOOK_CREATED:
      return {...state, ...action.data.entities.books };

    default:
      return state;

  }
}

// SELECTORS

export const booksSelector = state => state.books;

export const allBooksSelector = createSelector(
  booksSelector,
  booksHash => Object.values(booksHash)
)

