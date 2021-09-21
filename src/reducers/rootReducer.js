import { combineReducers } from "redux";
import { tabDataReducer } from "./tabDataReducer";
import { tabsReducer } from "./tabsReducer";


const rootReducer = combineReducers({
    tabsReducer,
    tabDataReducer,
})

export default rootReducer;