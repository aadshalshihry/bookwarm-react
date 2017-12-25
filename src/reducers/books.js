import { BOOK_FETCHED, BOOK_CREATED, BOOK_MAKE_FINISH, BOOK_REMOVED } from '../actions/types';
import { createSelector } from 'reselect';

export default function books(state = {}, action = {}) {
  switch (action.type) {

    case BOOK_FETCHED:
    case BOOK_CREATED:
    case BOOK_MAKE_FINISH:
      return {...state, ...action.data.entities.books };

    case BOOK_REMOVED:
      let newState = Object.assign({}, state);
      delete newState[action.data._id]
      return {...newState}

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

