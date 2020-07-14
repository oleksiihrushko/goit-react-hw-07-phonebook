import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps, {
  onSubmit: contactsOperations.addContact,
})(ContactForm);
