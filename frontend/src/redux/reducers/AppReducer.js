import * as types from '../actions/action-types';

export default (state = [], action) => {
    switch (action.type) {
        case types.ACTION_SUCCEEDED:
            return {
                ...state,
                onActionSuccess: action.payload
            }
        case types.ACTION_FAILED:
            return {
                ...state,
                onActionFail: action.payload
            }
        case types.GET_USER_DETAILS_SUCCEEDED:
            return {
                ...state,
                onGetUserDetailsSuccess: action.payload
            }
        case types.GET_USER_DETAILS_FAILED:
            return {
                ...state,
                onGetUserDetailsFail: action.payload
            }
        case types.GET_FOLLOWERS_LIST_SUCCEEDED:
            return {
                ...state,
                onGetFollowersListSuccess: action.payload
            }
        case types.GET_FOLLOWERS_LIST_FAILED:
            return {
                ...state,
                onGetFollowersListFail: action.payload
            }
        default:
            return state;
    }
};