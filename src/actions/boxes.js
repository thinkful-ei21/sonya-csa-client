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

export const createBox = (pickUpDate) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/box/${pickUpDate}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vegetables: ['carrot', 'beet', 'beans']
        })
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
      },
      body: {
          vegetables: []
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

