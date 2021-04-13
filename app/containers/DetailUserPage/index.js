/**
 *
 * DetailUserPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  makeSelectDetailUserData,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import LoadingIndicator from 'components/LoadingIndicator';

import reducer from './reducer';
import saga from './saga';
import { loadDetailUser } from '../App/actions';

const key = 'detailUserPage';

export function DetailUserPage({
  loading,
  error,
  userData,
  onLoadDetailUsers,
  // eslint-disable-next-line react/prop-types
  match,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const userId = +match.params.userId;

  useEffect(() => {
    if ((!userData || userData.id !== userId) && !loading) {
      onLoadDetailUsers(userId);
    }
  });

  let renderedUsers;

  if (loading) {
    renderedUsers = <LoadingIndicator />;
  }

  if (error !== false) {
    renderedUsers = 'Something went wrong, please try again!';
  }

  return (
    <article>
      <Helmet>
        <title>User Page</title>
        <meta name="description" content="Description of DetailUserPage" />
      </Helmet>

      <div>{renderedUsers}</div>
    </article>
  );
}

DetailUserPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  userData: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoadDetailUsers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  userData: makeSelectDetailUserData(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadDetailUsers: userId => dispatch(loadDetailUser(userId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DetailUserPage);
