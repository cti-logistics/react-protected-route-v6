import AuthActionTypes from './AuthActionTypes';

const INITIAL_STATE = {
  userName: null,
  token: null,
  errMsg: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        userName: action.payload.userName,
        token: action.payload.token,
      };
    case AuthActionTypes.USER_SIGNOUT_SUCCESS:
      return {
        ...state,
        userName: null,
        token: null,
      };
    case AuthActionTypes.USER_SIGNIN_FAILURE:
    case AuthActionTypes.USER_SIGNOUT_FAILURE:
      return {
        ...state,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
