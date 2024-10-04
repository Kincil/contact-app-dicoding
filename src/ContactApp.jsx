import React from 'react';
import ContactList from './ContactList';
import { getData } from './data.js';

export default function ContactApp() {
  const contacts = getData();

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}
