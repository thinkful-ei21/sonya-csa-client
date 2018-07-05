import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_BOX_SUCCESS = 'FETCH_BOX_SUCCESS';
export const fetchBoxSuccess = data => ({
    type: FETCH_BOX_SUCCESS,
    data
});

export const FETCH_BOX_ERROR = 'FETCH_BOX_ERROR';
export const fetchBoxError = error => ({
    type: FETCH_BOX_ERROR,
    error
});

export const CREATE_BOX_SUCCESS = 'CREATE_BOX_SUCCESS';
export const createBoxSuccess = data => ({
    type: CREATE_BOX_SUCCESS,
    data
});

export const CREATE_BOX_ERROR = 'CREATE_BOX_ERROR';
export const createBoxError = error => ({
    type: CREATE_BOX_ERROR,
    error
});

export const ADD_VEGETABLE = 'ADD_VEGETABLE';
export const addVegetable = vegetable => ({
    type: ADD_VEGETABLE,
    vegetable
});

export const CREATE_BOX_CONTENTS_SUCCESS = 'CREATE_BOX_CONTENTS_SUCCESS';
export const createBoxContentsSuccess = data => ({
    type: CREATE_BOX_CONTENTS_SUCCESS,
    data
});

export const CREATE_BOX_CONTENTS_ERROR = 'CREATE_BOX_CONTENTS_ERROR';
export const createBoxContentsError = error => ({
    type: CREATE_BOX_CONTENTS_ERROR,
    error
});

export const createBox = (pickUpDate) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/box/${pickUpDate}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => {
        console.log(data, 'post request response data')
        dispatch(createBoxSuccess(data))
    })
    .catch(err => {
        dispatch(createBoxError(err))
    })
}

export const fetchBox = (pickUpDate) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/box/${pickUpDate}`, {
      method: 'GET',
      headers: {
          // Provide our auth token as credentials
          Authorization: `Bearer ${authToken}`
      }
  })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then((data) => {

          dispatch(fetchBoxSuccess(data))
      })
      .catch(err => {
          dispatch(fetchBoxError(err));
      });
};

export const createBoxContents = (boxContents, pickUpDate) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/box/${pickUpDate}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        },
        body: boxContents
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data => {
        dispatch(createBoxContentsSuccess(data))
    })
    .catch(err => {
        dispatch(createBoxContentsError(err))
    }));
}
