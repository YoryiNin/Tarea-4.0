// src/components/ContactForm.js
import React, { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { nombre, apellido, telefono };
    onAddContact(newContact);
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Contacto</h2>
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      
      <label>Apellido:</label>
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
      
      <label>Teléfono:</label>
      <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
      
      <button type="submit">Guardar Contacto</button>
    </form>
  );
}

export default ContactForm;
