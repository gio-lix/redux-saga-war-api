import {call, all, spawn, put, take} from "redux-saga/effects";
import peopleStarWatchSaga from "./peopleStar-saga";
import {makeStarWarAction} from "../action-creators";





export default function* rootSaga() {
    const sagas = [
        peopleStarWatchSaga
        ]

    // @ts-ignore
    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (error: any) {
                    yield put({type: makeStarWarAction.PEOPLE_FETCH_FAIL, payload: error.message})
                }
            }
        })
    })

    yield all(retrySagas)

}