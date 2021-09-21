import { put } from "@redux-saga/core/effects";
import { adddatatab } from "../actions/allActions";

export function* newDataTab(){
    yield put(adddatatab());
}