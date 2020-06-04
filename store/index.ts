import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const middleware = [thunk];

export default createStore(rootReducer, applyMiddleware(...middleware));
