import React, { useState } from 'react';

const AddUserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    domain: '',
    available: false
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Call the onAddUser function passed from the parent component
    // and pass the formData as an argument
    onAddUser(formData);
    // Reset form fields after submission
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      domain: '',
      available: false
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Gender:
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
      </label>
      <label>
        Domain:
        <input type="text" name="domain" value={formData.domain} onChange={handleChange} />
      </label>
      <label>
        Availability:
        <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
