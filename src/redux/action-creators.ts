
export const makeStarWarAction = {
    MAKE_STAR_REQUEST: 'MAKE_STAR_REQUEST',
    PEOPLE_FETCH_LOADING: 'PEOPLE_FETCH_LOADING',
    PEOPLE_FETCH_SUCCESS: 'PEOPLE_FETCH_SUCCESS',
    PEOPLE_FETCH_FAIL: 'PEOPLE_FETCH_FAIL',
}

export const getStarWarRequest = (data: any) => ({
    type: makeStarWarAction.MAKE_STAR_REQUEST,
    payload: data
})


