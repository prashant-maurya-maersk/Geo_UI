import { put } from "@redux-saga/core/effects";
import { addresulttab } from "../actions/allActions";

export function* addResultTab(){
    yield put(addresulttab());
}