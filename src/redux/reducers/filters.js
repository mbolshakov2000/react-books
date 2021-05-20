const initialState = {
    categoryPublish: null,
    categoryAuthor: null,
    categoryYear: null,
    sortBy: {
        type: 'rating',
        order: 'desc',
    },
    searchQuery: '',
};

const filters = (state = initialState,action) => {
    if (action.type === 'SET_SORT_BY'){
        return{
            ...state,
            sortBy: action.payload,
        };
    }
    if (action.type === 'SET_CATEGORY_PUBLISH'){
        return{
            ...state,
            categoryPublish: action.payload,
        };
    }
    if (action.type === 'SET_CATEGORY_AUTHOR'){
        return{
            ...state,
            categoryAuthor: action.payload,
        };
    }
    if (action.type === 'SET_CATEGORY_YEAR'){
        return{
            ...state,
            categoryYear: action.payload,
        };
    }
    if (action.type === 'SET_QUERY'){
        return{
            ...state,
            searchQuery: action.payload,
        };
    }
    return state;
};

export default filters;