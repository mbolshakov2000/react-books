import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchBooks = (sortBy, categoryPublish, categoryAuthor, categoryYear, searchQuery) => (dispatch) => {
    dispatch(setLoaded(false));

    axios.get(`/books?${searchQuery !== '' ? `q=${searchQuery}&` : ''}${categoryPublish !== null ? `categoryPublish=${categoryPublish}&` : ''}${categoryAuthor !== null ? `categoryAuthor=${categoryAuthor}&` : ''}${categoryYear !== null ? `categoryYear=${categoryYear}&` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      dispatch(setBooks(data));
    });
};

export const setBooks = (items) => ({
    type: 'SET_BOOKS',
    payload: items,
});
