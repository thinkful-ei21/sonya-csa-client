import {
  FETCH_BOX_SUCCESS,
  FETCH_BOX_ERROR, 
  CREATE_BOX_SUCCESS,
  CREATE_BOX_ERROR,
  ADD_VEGETABLE,
  CREATE_BOX_CONTENTS_SUCCESS,
  CREATE_BOX_CONTENTS_ERROR
} from '../actions/boxes';

const initialState = {
  vegetables: [],
  boxContents: null,
  pickUpDate: null,
  data: null,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_BOX_SUCCESS) {
      if (action.data.boxContents) {
        const vegetables = action.data.boxContents.map(vegetable => {
            return vegetable.name
        })
    
        return Object.assign({}, state, {
            vegetables: vegetables,
            boxContents: action.data.boxContents,
            pickUpDate: action.data.pickUpDate,
            error: null
      });
    } else {
        return Object.assign({}, state, {
            vegetables: [],
            boxContents: null,
            pickUpDate: action.data.pickUpDate,
            error: null
        })
    }
  } else if (action.type === FETCH_BOX_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  } else if (action.type === CREATE_BOX_SUCCESS) {
      return Object.assign({}, state, {
          vegetables: [],
          boxContents: null,
          pickUpDate: action.data.pickUpDate,
          error: null
      });
  } else if (action.type === CREATE_BOX_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
  } else if (action.type === ADD_VEGETABLE) {
      return Object.assign({}, state, {
          vegetables: [...state.vegetables, action.vegetable]
      });
  } else if (action.type === CREATE_BOX_CONTENTS_SUCCESS) {
      return Object.assign({}, state, {
          data: action.data
      });
  } else if (action.type === CREATE_BOX_CONTENTS_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      })
  }
  return state;
}