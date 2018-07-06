import {
  FETCH_BOX_SUCCESS,
  FETCH_BOX_ERROR, 
  CREATE_BOX_SUCCESS,
  CREATE_BOX_ERROR,
  ADD_VEGETABLE,
  UPDATE_BOX_SUCCESS,
  UPDATE_BOX_ERROR,
  SET_SELECT_DISPLAY_BOOLEAN
} from '../actions/boxes';

const initialState = {
  unsavedBoxContents: [],
  savedBoxContents: null,
  pickUpDate: null,
  displaySelectForm: true,
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
   
  } else if (action.type === SET_SELECT_DISPLAY_BOOLEAN) {
      //console.log('unsavedBoxContents: ', state.unsavedBoxContents);
      if ((state.savedBoxContents && state.savedBoxContents.length === 8) || (state.unsavedBoxContents.length === 8)) {
        return Object.assign({}, state, {
            displaySelectForm: false
        })
      } else {
          return Object.assign({}, state, {
              displaySelectForm: true
          })
      }
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