import {
  FETCH_BOX_SUCCESS,
  FETCH_BOX_ERROR, 
  CREATE_BOX_SUCCESS,
  CREATE_BOX_ERROR,
  ADD_VEGETABLE,
  UPDATE_BOX_SUCCESS,
  UPDATE_BOX_ERROR,
  RESET_VEGETABLE_ADD_LIST
} from '../actions/boxes';

const initialState = {
  unsavedBoxContents: [],
  savedBoxContents: null,
  pickUpDate: null,
  data: null,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_BOX_SUCCESS) {
        if (action.data.boxContents.length === 0) {  
            return Object.assign({}, state, {
                unsavedBoxContents: [],
                savedBoxContents: null,
                pickUpDate: action.data.pickUpDate,
                error: null
            });
        } else {
        return Object.assign({}, state, {
            unsavedBoxContents: [],
            savedBoxContents: action.data.boxContents,
            pickUpDate: action.data.pickUpDate,
            error: null
      });
    }
  } else if (action.type === FETCH_BOX_ERROR) {
      return Object.assign({}, state, {
          unsavedBoxContents: [],
          savedBoxContents: null,
          pickUpDate: null,
          error: action.error
      });
  } else if (action.type === CREATE_BOX_SUCCESS) {
      return Object.assign({}, state, {
        unsavedBoxContents: [],
        savedBoxContents: null,
        pickUpDate: action.data.pickUpDate,
        error: null
      });
  } else if (action.type === CREATE_BOX_ERROR) {
      return Object.assign({}, state, {
        unsavedBoxContents: [],
        savedBoxContents: null,
        pickUpDate: null,
        error: action.error
      });
  } else if (action.type === ADD_VEGETABLE) {
      return Object.assign({}, state, {
        unsavedBoxContents: [...state.unsavedBoxContents, action.vegetable]
      });
  } else if (action.type === RESET_VEGETABLE_ADD_LIST) {
      return Object.assign({}, state, {
        unsavedBoxContents: []
      });
  } else if (action.type === UPDATE_BOX_SUCCESS) {
      return Object.assign({}, state, {
        unsavedBoxContents: [],
        savedBoxContents: action.data.boxContents,
        pickUpDate: action.data.pickUpDate,
        error: null
      });
  } else if (action.type === UPDATE_BOX_ERROR) {
      return Object.assign({}, state, {
        unsavedBoxContents: [],
        savedBoxContents: null,
        pickUpDate: null,
        error: action.error
      })
  }
  return state;
}