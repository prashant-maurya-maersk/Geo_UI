import { put } from "@redux-saga/core/effects";
import { deletedatatab } from "../actions/allActions";

export function* deleteDataTab(params){
    console.log(params);
    yield put(deletedatatab(params.payload));
}