import { combineReducers } from 'redux';
import { persistReducer, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/AuthReducer';

const persisConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  // Check event type when user click sign out.
  if (action.type === 'USER_SIGNOUT_SUCCESS') {
    storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default persistReducer(persisConfig, rootReducer);
