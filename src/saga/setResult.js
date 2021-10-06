import { put } from "@redux-saga/core/effects";
import { setres } from "../actions/allActions";

export function* setResult(params){
    yield put(setres(params.payload.id));
}