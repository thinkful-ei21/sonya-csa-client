import {
  FETCH_VEGETABLES_SUCCESS,
  FETCH_VEGETABLES_ERROR
} from '../actions/vegetables'

const initialState = {
  data: '',
  errir: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_VEGETABLES_SUCCESS) {
      return Object.assign({}, state, {
          data: action.data,
          error: null
      });
  } else if (action.type === FETCH_VEGETABLES_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  return state;
}