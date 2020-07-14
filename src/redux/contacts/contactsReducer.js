import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';

const onAddContact = (state, action) => {
  return [...state, action.payload];
};

const onRemoveContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const onChangeFilter = (_, action) => action.payload;

const items = createReducer([], {
  [contactsActions.fetchContactSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: onAddContact,
  [contactsActions.removeContactSuccess]: onRemoveContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: onChangeFilter,
});

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.fetchContactRequest]: () => true,
  [contactsActions.fetchContactSuccess]: () => false,
  [contactsActions.fetchContactError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
  items,
  loading,
  filter,
});
