import {
  FETCH_BOX_SUCCESS,
  FETCH_BOX_ERROR, 
  CREATE_BOX_SUCCESS,
  CREATE_BOX_ERROR,
  ADD_VEGETABLE
} from '../actions/boxes';

const initialState = {
  vegetables: [],
  pickUpDate: null,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_BOX_SUCCESS) {
      return Object.assign({}, state, {
          vegetables: action.data.vegetables,
          pickUpDate: action.data.pickUpDate,
          error: null
      });
  } else if (action.type === FETCH_BOX_ERROR) {
      return Object.assign({}, state, {
          error: action.data.error
      });
  } else if (action.type === CREATE_BOX_SUCCESS) {
      return Object.assign({}, state, {
          vegetables: action.data.vegetables,
          pickUpDate: action.data.pickUpDate,
          error: null
      });
  } else if (action.type === CREATE_BOX_ERROR) {
        return Object.assign({}, state, {
            error: action.data.error
        });
  } else if (action.type === ADD_VEGETABLE) {
      console.log(action.vegetable, state.vegetables)
      return Object.assign({}, state, {
          vegetables: [...state.vegetables, action.vegetable]
      });
  }
  return state;
}