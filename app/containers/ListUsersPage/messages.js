/*
 * ListUsersPage Messages
 *
 * This contains all the text for the ListUsersPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ListUsersPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'List users',
  },
  buttonLoadMore: {
    id: `${scope}.load_more.button`,
    defaultMessage: 'Load more ...',
  },
});
