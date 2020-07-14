import React from 'react';

import themeConfig from '../service/themeConfig';
import styles from './App.module.css';
import Logo from './logo/Logo';
import ContactForm from './contactForm/ContactFormContainer';
import Filter from './filter/FilterContainer';
import ContactList from './contactList/ContactListContainer';

const App = ({ contacts, theme, changeTheme, isloadingContacts }) => {
  let themeState = 'light';
  theme ? (themeState = 'light') : (themeState = 'dark');

  return (
    <div
      style={{
        color: themeConfig[themeState].fontColor,
        background: themeConfig[themeState].bodybg,
      }}
    >
      <Logo />
      {isloadingContacts && <h2>Loading ...</h2>}
      <button onClick={changeTheme}>Change theme</button>
      <ContactForm />
      {contacts && contacts.length > 1 && <Filter />}
      <h2 className={styles.sectionTitle}>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;
