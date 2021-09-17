import createSagaMiddleware from "@redux-saga/core";
import { createStore } from "redux";


const sagaMiddleware = createSagaMiddleware();

export const store = createStore()