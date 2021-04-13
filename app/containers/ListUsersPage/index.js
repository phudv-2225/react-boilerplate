/**
 *
 * ListUsersPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  makeSelectUsers,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import A from 'components/A';
import H1 from 'components/H1';
import Img from 'components/Img';
import LoadingIndicator from 'components/LoadingIndicator';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import ListItemLabel from './ListItemLabel';
import UserInfo from './UserInfo';
import UserAvatar from './UserAvatar';

import { loadUsers } from '../App/actions';

const key = 'listUsersPage';

export function ListUsersPage({ loading, error, users, onLoadUsers }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!users && !loading) {
      onLoadUsers();
    }
  });

  let renderedUsers;

  if (loading) {
    renderedUsers = <LoadingIndicator />;
  }

  if (error !== false) {
    renderedUsers = <ListItem item="Something went wrong, please try again!" />;
  }

  if (users) {
    renderedUsers = users.map(user => (
      <ListItem key={user.id}>
        <Link to={`/user/${user.id}/view`}>
          <UserInfo>
            <UserAvatar>
              <Img
                className="user-avatar"
                src={user.avatar_url}
                alt="User Avatar"
              />
            </UserAvatar>
            <ListItemTitle> {user.login} </ListItemTitle>
          </UserInfo>
        </Link>

        <A href={user.html_url}>
          <ListItemLabel>Git</ListItemLabel>
        </A>

        <A href="#">
          <ListItemLabel>Follower</ListItemLabel>
        </A>

        <A href="#">
          <ListItemLabel>Following</ListItemLabel>
        </A>

        <A href="#">
          <ListItemLabel>List Repos</ListItemLabel>
        </A>
      </ListItem>
    ));
  }

  return (
    <article>
      <Helmet>
        <title>List Users</title>
        <meta
          name="description"
          content="A React.js Boilerplate application User List"
        />
      </Helmet>
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <List>{renderedUsers}</List>
      </div>
    </article>
  );
}

ListUsersPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadUsers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadUsers: () => dispatch(loadUsers()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ListUsersPage);
