const initialState = {
    upItems: {},
    downItems: {},
};

const ratings = (state = initialState, action) => {
    switch (action.type){
        case 'UP_RATING':{
            const newUpItems = {
                ...state.upItems,
                [action.payload.id]: !state.upItems[action.payload.id]
                ? [action.payload]
                : [...state.upItems[action.payload.id]],
            }; 
            const newDownItems ={
                ...state.downItems
            }
            delete newDownItems[action.payload.id];
            return{
                ...state,
                upItems: newUpItems,
                downItems: newDownItems,
            };
        }
        case 'DOWN_RATING':
            const newDownItems = {
                ...state.downItems,
                [action.payload.id]: !state.downItems[action.payload.id]
                ? [action.payload]
                : [...state.downItems[action.payload.id]],
            }; 
            const newUpItems ={
                ...state.upItems
            }
            delete newUpItems[action.payload.id];
            return{
                ...state,
                upItems: newUpItems,
                downItems: newDownItems,
        };
        default:
            return state;       
    }
};

export default ratings;