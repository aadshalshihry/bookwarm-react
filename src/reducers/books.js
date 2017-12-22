// import {  } from '../actions/types';
import { createSelector } from 'reselect';

export default function books(state = {}, action = {}) {
  switch (action.type) {
    // case USER_LOGGED_IN:
    //   return action.user;

    // case USER_LOGGED_OUT:
    //   return {};

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

