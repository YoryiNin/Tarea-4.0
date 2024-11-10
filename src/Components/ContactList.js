// src/components/ContactList.js
import React from 'react';

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      <h2>Contactos Guardados</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.nombre} {contact.apellido} - {contact.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
