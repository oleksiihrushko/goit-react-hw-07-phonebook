import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import ContactItem from './ContactItem';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(contactsOperations.removeContact(ownProps.contact.id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
