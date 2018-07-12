import {
  FETCH_BOX_SUCCESS,
  FETCH_BOX_ERROR, 
  CREATE_BOX_SUCCESS,
  CREATE_BOX_ERROR,
  ADD_VEGETABLE,
  UPDATE_BOX_SUCCESS,
  UPDATE_BOX_ERROR,
  SET_SELECT_DISPLAY_BOOLEAN,
  DELETE_VEGETABLE,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
  SHOW_ABOUT
} from '../actions/boxes';

const initialState = {
  unsavedBoxContents: [],
  savedBoxContents: null,
  pickUpDate: null,
  displaySelectForm: true,
  data: null,
  error: null,
  errorMessage: null,
  successMessage: null,
  showAbout: false
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
            unsavedBoxContents: null,
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
      if (state.savedBoxContents) {
          return Object.assign({}, state, {
            savedBoxContents: [...state.savedBoxContents, action.vegetable]
          })
      } else {
        return Object.assign({}, state, {
            unsavedBoxContents: [...state.unsavedBoxContents, action.vegetable]
          });   
      }
      
  } else if (action.type === SET_SELECT_DISPLAY_BOOLEAN) {
      //console.log('unsavedBoxContents: ', state.unsavedBoxContents);
      if ((state.savedBoxContents && state.savedBoxContents.length === 8) || (state.unsavedBoxContents && state.unsavedBoxContents.length === 8)) {
        return Object.assign({}, state, {
            displaySelectForm: false,
            //saveInstructions: 'When you are happy with your 8 choices, save your box.  You can always come back and change them later.'
        })
      } else {
          return Object.assign({}, state, {
              displaySelectForm: true,
              saveInstructions: ''
          })
      }
  } else if (action.type === UPDATE_BOX_SUCCESS) {
      return Object.assign({}, state, {
        unsavedBoxContents: null,
        savedBoxContents: action.data.boxContents,
        pickUpDate: action.data.pickUpDate,
        error: null
      });
  } else if (action.type === UPDATE_BOX_ERROR) {
      return Object.assign({}, state, {
        error: action.error
      })
  } else if (action.type === DELETE_VEGETABLE) {
      if (state.unsavedBoxContents) {
        return Object.assign({}, state, {
            unsavedBoxContents: state.unsavedBoxContents.filter((vegetable, index) => index !== Number(action.index))
        })
      } else {
          return Object.assign({}, state, {
              savedBoxContents: state.savedBoxContents.filter((vegetable, index) => index !== Number(action.index))
          })
      }   
  } else if (action.type === ERROR_MESSAGE) {
      return Object.assign({}, state, {
          errorMessage: action.message
      })
  } else if (action.type === SUCCESS_MESSAGE) {
      return Object.assign({}, state, {
          successMessage: action.message
      })
  } else if (action.type === SHOW_ABOUT) {
      return Object.assign({}, state, {
          showAbout: action.boolean
      })
  }
  return state;
}