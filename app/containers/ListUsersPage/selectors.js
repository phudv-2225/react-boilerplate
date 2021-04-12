import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ListUsersPage state domain
 */

const selectListUsersPageDomain = state => state.ListUsersPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListUsersPage
 */

const makeSelectListUsersPage = () =>
  createSelector(
    selectListUsersPageDomain,
    substate => substate,
  );

export default makeSelectListUsersPage;
export { selectListUsersPageDomain };
