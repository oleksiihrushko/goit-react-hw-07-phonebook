import axios from 'axios';
import contactsActions from './contactsActions';

axios.defaults.baseURL = 'http://localhost:2000';

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  axios('/contacts')
    .then(({ data }) => dispatch(contactsActions.fetchContactSuccess(data)))
    .catch(error => dispatch(contactsActions.fetchContactError(error)));
};

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post('/contacts', {
      name,
      number,
    })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch(error => dispatch(contactsActions.removeContactError(error)));
};

export default { addContact, fetchContacts, removeContact };
