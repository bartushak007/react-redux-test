import { createSelector } from 'reselect';

const _getContactsState = (state) => state.contacts;

export const getContactsState = createSelector(
	[_getContactsState],
	(contacts) => contacts,
);
