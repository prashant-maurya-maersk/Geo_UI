const initialValue={
    tabs:[0],
    value:0,
}

export const tabsReducer =(state = initialValue,action) =>{
    switch(action.type){
        case 'ADD_NEW_TAB' :
            return{
                ...state,
                value: state.tabs.length,
                tabs:[...state.tabs,0]
            }

        case 'ADD_RESULT_TAB' :
            return{
                ...state,
                value: state.tabs.length,
                tabs:[...state.tabs,1]
            }

        case 'DELETE_TAB' :{
            const arr = [...state.tabs]
            arr.splice(action.payload,1);
            return{
                ...state,
                tabs:[...arr]
            }
        }

        case 'SET_VALUE':{
            return{
                ...state,
                value:action.payload,
            }
        }
        
        default: return state;
    }
}