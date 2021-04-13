import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the detailUserPage state domain
 */

const selectDetailUserPageDomain = state =>
  state.detailUserPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DetailUserPage
 */

const makeSelectDetailUserPage = () =>
  createSelector(
    selectDetailUserPageDomain,
    substate => substate,
  );

export default makeSelectDetailUserPage;
export { selectDetailUserPageDomain };
