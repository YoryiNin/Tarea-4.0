// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';


function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://www.raydelto.org/agenda.php');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error al obtener los contactos:', error);
    }
  };

  const addContact = async (newContact) => {
    try {
      await fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: JSON.stringify(newContact),
      });
      setContacts([...contacts, newContact]);
    } catch (error) {
      console.error('Error al guardar el contacto:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredContacts = contacts.filter(contact => 
    `${contact.nombre} ${contact.apellido} ${contact.telefono}`
    .toLowerCase()
    .includes(searchTerm)
  );

  return (
    <div className="container">
      <h1>Agenda de Contactos</h1>
      <input 
        type="text" 
        placeholder="Buscar contacto..." 
        onChange={handleSearch} 
      />
      <ContactList contacts={filteredContacts} />
      <ContactForm onAddContact={addContact} />
    
    </div>
  );
}

export default App;
