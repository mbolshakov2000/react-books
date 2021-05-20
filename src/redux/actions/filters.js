export const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name,
});

export const setCategoryPublish = (catIndex) => ({
    type: 'SET_CATEGORY_PUBLISH',
    payload: catIndex,
});
export const setCategoryAuthor = (catIndex) => ({
    type: 'SET_CATEGORY_AUTHOR',
    payload: catIndex,
});
export const setCategoryYear = (catIndex) => ({
    type: 'SET_CATEGORY_YEAR',
    payload: catIndex,
});

export const setSearchQuery = (value) => ({
    type: 'SET_QUERY',
    payload: value,
});
