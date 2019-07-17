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

export const getUserDetails = function (screenName) {
    return dispatch => {
        fetch('http://localhost:4000/api/v1/getUserDetails/'+screenName, {
            method: 'GET',
        }).then(response => {
            return response.json();
        }).then(respJSON => {
            dispatch({ type: types.GET_USER_DETAILS_SUCCEEDED, payload: respJSON })
        }).catch(error => {
            dispatch({ type: types.GET_USER_DETAILS_FAILED, payload: error })
        })
    }
}

export const getFollowersList = function (screenName) {
    return dispatch => {
        fetch('http://localhost:4000/api/v1/getFollwersList/' + screenName, {
            method: 'GET',
        }).then(response => {
            return response.json();
        }).then(respJSON => {
            dispatch({ type: types.GET_FOLLOWERS_LIST_SUCCEEDED, payload: respJSON })
        }).catch(error => {
        dispatch({ type: types.GET_FOLLOWERS_LIST_FAILED, payload: error })
        })
    }
}