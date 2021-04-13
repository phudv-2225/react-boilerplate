import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectDetailUser } from 'containers/App/selectors';

import { LOAD_DETAIL_USER } from 'containers/App/constants';
import {
  loadDetailUserSuccess,
  loadDetailUserError,
} from 'containers/App/actions';

export function* getGithubUsersSaga(action) {
  const currentUser = yield select(makeSelectDetailUser(action.userId));
  const requestURL = currentUser.url;

  try {
    const user = yield call(request, requestURL);
    yield put(loadDetailUserSuccess(user));
  } catch (err) {
    yield put(loadDetailUserError(err));
  }
}

export default function* detailUserPageSaga() {
  yield takeLatest(LOAD_DETAIL_USER, getGithubUsersSaga);
}
