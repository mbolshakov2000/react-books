import { combineReducers } from 'redux';

import filters from './filters';
import books from './books';
import favorites from './favorites';
import ratings from './ratings';

const rootReducer = combineReducers({
    filters,
    books,
    favorites,
    ratings,
});

export default rootReducer;