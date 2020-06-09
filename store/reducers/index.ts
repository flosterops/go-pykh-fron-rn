import { combineReducers } from 'redux';
import appReducer from './appReducer';
import friendsReducer from './friendsReducer';

export default combineReducers({
    app: appReducer,
    friends: friendsReducer,
});
