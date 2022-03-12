import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "./sagas";
import {peopleStarReducers} from "./reducers/peopleStarReducers";


const rootReducer = combineReducers({
    peopleState: peopleStarReducers
})

export type RootState = ReturnType<typeof rootReducer>


const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store