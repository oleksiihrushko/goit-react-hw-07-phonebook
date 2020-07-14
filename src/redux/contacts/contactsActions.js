import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuid } from 'uuid';

const fetchContactRequest = createAction('contacts/fetchRequest');
const fetchContactSuccess = createAction('contacts/fetchSuccess');
const fetchContactError = createAction('contacts/fetchError');

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const removeContactRequest = createAction('contacts/removeRequest');
const removeContactSuccess = createAction('contacts/removeSuccess');
const removeContactError = createAction('contacts/removeError');

// const addContact = createAction('contacts/add', (name, number) => ({
//   payload: {
//     contact: { id: uuid(), name, number },
//   },
// }));

const removeContact = createAction('contacts/remove');

const changeFilter = createAction('contacts/changeFilter');

export default {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  // addContact,
  removeContact,
  changeFilter,
};
