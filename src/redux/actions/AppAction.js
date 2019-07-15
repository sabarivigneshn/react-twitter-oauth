import * as types from './action-types';

export const GetData = function () {
    return dispatch => {
        fetch('http://dummy.restapiexample.com/api/v1/employees', {
            method: 'GET',
        }).then(response => {
            return response.json();
        }).then(respJSON => {
            dispatch({ type: types.ACTION_SUCCEEDED, payload: respJSON })
        }).catch(error => {
            dispatch({ type: types.ACTION_FAILED, payload: error })
        })
    }
}