/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_DETAIL_USER,
  LOAD_DETAIL_USER_SUCCESS,
  LOAD_DETAIL_USER_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

/**
 * Load the users, this action starts the request saga
 */
export function loadUsers() {
  return {
    type: LOAD_USERS,
  };
}

/**
 * Dispatched when the users are loaded by the request saga
 */
export function usersLoaded(users) {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
}

/**
 * Dispatched when loading the users fails
 */
export function loadingUsersError(error) {
  return {
    type: LOAD_USERS_ERROR,
    error,
  };
}

/**
 * Load the detail, this action starts the request saga
 */
export function loadDetailUser(userId) {
  return {
    type: LOAD_DETAIL_USER,
    userId,
  };
}

/**
 * Dispatched when the detail are loaded by the request saga
 */
export function loadDetailUserSuccess(user) {
  return {
    type: LOAD_DETAIL_USER_SUCCESS,
    user,
  };
}

/**
 * Dispatched when loading the detail fails
 */
export function loadDetailUserError(error) {
  return {
    type: LOAD_DETAIL_USER_ERROR,
    error,
  };
}
