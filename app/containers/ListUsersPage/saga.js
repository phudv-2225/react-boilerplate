import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { LOAD_USERS } from 'containers/App/constants';
import { usersLoaded, loadingUsersError } from 'containers/App/actions';

export function* getGithubUsersSaga() {
  const requestURL = `https://api.github.com/users?page=1&per_page=20`;

  try {
    const users = yield call(request, requestURL);
    yield put(usersLoaded(users));
  } catch (err) {
    yield put(loadingUsersError(err));
  }
}

export default function* githubUsersData() {
  yield takeLatest(LOAD_USERS, getGithubUsersSaga);
}
