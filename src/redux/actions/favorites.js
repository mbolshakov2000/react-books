export const addBookToFavorites = (bookObj) => ({
    type: 'ADD_BOOK_FAVORITES',
    payload: bookObj
})

export const clearFavorites = () => ({
    type: 'CLEAR_FAVORITES',
});

export const removeFavoritesItem = (id) => ({
    type: 'REMOVE_FAVORITES_ITEM',
    payload: id,
});