import { takeLatest, put, all, call, delay } from 'redux-saga/effects';
import AuthActionTypes from './AuthActionTypes';
import { signInSuccess, signInFailure, signOutSuccess } from './AuthActions';

function* signInStartAsync({ payload }) {
  try {
    yield delay(100);
    const userAuth = {
      userName: 'UAT',
      token: 'TOKEN_FROM_API',
    };
    yield put(signInSuccess(userAuth));
  } catch (err) {
    console.error(err.message);
    yield put(signInFailure(err.message));
  }
}

function* signOutStartAsync() {
  try {
    yield delay(100);
    yield put(signOutSuccess());
  } catch (err) {
    console.error(err.message);
  }
}

export function* onSignInStart() {
  yield takeLatest(AuthActionTypes.USER_SIGNIN_START, signInStartAsync);
}

export function* onSignOutStart() {
  yield takeLatest(AuthActionTypes.USER_SIGNOUT_START, signOutStartAsync);
}

export function* authSagas() {
  yield all([call(onSignInStart), call(onSignOutStart)]);
}
