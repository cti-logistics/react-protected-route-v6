import { all, call } from 'redux-saga/effects';
import { authSagas } from './auth/AuthSagas';

export default function* rootSaga() {
  yield all([call(authSagas)]);
}
