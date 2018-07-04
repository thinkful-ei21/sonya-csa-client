import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
//import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import boxReducer from './reducers/box';
import vegetableReducer from './reducers/vegetable';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import {loadAuthToken} from './local-storage';

const store = createStore(
  combineReducers({
  form: formReducer,
  auth: authReducer,
  protectedData: protectedDataReducer,
  box: boxReducer,
  vegetable: vegetableReducer
}),
applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
