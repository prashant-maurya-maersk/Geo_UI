const tabs=[0];

export const tabsReducer =(state = tabs,action) =>{
    switch(action.type){
        case 'ADD_NEW_TAB' :
            return{
                ...state,
                tabs:[...state,0]
            }

        case 'ADD_RESULT_TAB' :
            return{
                ...state,
                tabs:[...state,1]
            }

        case 'DELETE_TAB' :
            const arr = [...state]
            arr.splice(action.payload,action.payload);
            return{
                ...state,
                tabs:[...arr]
            }
        
        default: return state;
    }
}