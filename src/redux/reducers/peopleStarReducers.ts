import {makeStarWarAction} from "../action-creators";

const initialState = {
    page: 1,
    search: '',
    loading: false,
    error: '',
    people: []
}

type Initial = typeof initialState

export const peopleStarReducers = (state: Initial = initialState, action: any) => {
    switch (action.type) {
        case makeStarWarAction.MAKE_STAR_REQUEST:
            return {
                ...state,
                loading: true,
                page: state.page,
                search: state.search
            }
        case makeStarWarAction.PEOPLE_FETCH_SUCCESS:
            return {...state,
                loading: false,
                people: action.payload}
        case makeStarWarAction.PEOPLE_FETCH_FAIL:
            return  {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}