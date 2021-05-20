import { combineReducers } from 'redux';

import filters from './filters';
import books from './books';
import favorites from './favorites';

const rootReducer = combineReducers({
    filters,
    books,
    favorites,
});

export default rootReducer;