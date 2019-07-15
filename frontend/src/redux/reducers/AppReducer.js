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
        default:
            return state;
    }
};