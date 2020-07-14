import { connect } from 'react-redux';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import ContactList from './ContactList';

const mapStateToProps = state => {
  if (state.contacts) {
    return {
      contacts: contactsSelectors.getFillteredContacts(state),
    };
  }
};

export default connect(mapStateToProps)(ContactList);
