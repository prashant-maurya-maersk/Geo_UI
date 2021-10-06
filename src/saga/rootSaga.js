import { takeEvery } from "redux-saga/effects"
import { addResultTab } from "./addResultTab";
import { deleteDataTab } from "./deleteDataTab";
import { newDataTab } from "./newDataTab"
import { setResult } from "./setResult";

export function* rootSaga() {
    yield takeEvery('ADD_NEW_TAB',newDataTab);
    yield takeEvery('ADD_RESULT',addResultTab);
    yield takeEvery('DELETE_TAB',deleteDataTab);
    yield takeEvery('ADD_DATA_RESULT',setResult);
}