import {call, put, takeEvery} from "redux-saga/effects";
import {makeStarWarAction} from "../action-creators";
import {getPeopleApi} from "../../api";


function* getPeopleStarData({payload} : any) {

    const data: Promise<any> = yield call(getPeopleApi,payload )
    yield put({type: makeStarWarAction.PEOPLE_FETCH_SUCCESS, payload: data})
}

export default function* peopleStarWatchSaga() {
    yield takeEvery(makeStarWarAction.MAKE_STAR_REQUEST, getPeopleStarData)
}