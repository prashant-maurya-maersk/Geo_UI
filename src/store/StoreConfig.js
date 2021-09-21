import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./../reducers/rootReducer";
import { rootSaga } from "./../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
));


sagaMiddleware.run(rootSaga);

export default store;