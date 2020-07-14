import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getTheme = state => state.themeColor;
const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;

const getFillteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export default {
  getContacts,
  getTheme,
  getLoading,
  getFilter,
  getFillteredContacts,
};
