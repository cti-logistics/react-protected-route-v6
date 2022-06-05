import AuthActionTypes from './AuthActionTypes';

export const signInStart = (userAuth) => ({
  type: AuthActionTypes.USER_SIGNIN_START,
  payload: userAuth,
});

export const signInSuccess = (userData) => ({
  type: AuthActionTypes.USER_SIGNIN_SUCCESS,
  payload: userData,
});

export const signInFailure = (errMsg) => ({
  type: AuthActionTypes.USER_SIGNIN_FAILURE,
  payload: errMsg,
});

export const signOutStart = () => ({
  type: AuthActionTypes.USER_SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: AuthActionTypes.USER_SIGNOUT_SUCCESS,
});
