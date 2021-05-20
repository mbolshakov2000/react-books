const initialState = {
    items: {},
    totalCount: 0,
};

const favorites = (state = initialState,action) => {
    switch (action.type){
        case 'ADD_BOOK_FAVORITES':{
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id]],
            }; 
            return{
                ...state,
                items: newItems,
                totalCount: Object.keys(newItems).length,
            };
        }
        case 'REMOVE_FAVORITES_ITEM':
            const newItems ={
                ...state.items
            }
            delete newItems[action.payload];
            return{
                ...state,
                items: newItems,
                totalCount: state.totalCount - 1,
        };
        case 'CLEAR_FAVORITES':
            return{
                totalCount: 0,
                items: {},
        }
        default:
            return state;       
    }
};

export default favorites;