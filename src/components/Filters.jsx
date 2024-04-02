import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [domainFilter, setDomainFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');

  const handleDomainChange = event => {
    const value = event.target.value;
    setDomainFilter(value);
    // Call the onFilter function passed from the parent component
    // and pass the current filter values as arguments
    onFilter(value, genderFilter, availabilityFilter);
  };

  const handleGenderChange = event => {
    const value = event.target.value;
    setGenderFilter(value);
    onFilter(domainFilter, value, availabilityFilter);
  };

  const handleAvailabilityChange = event => {
    const value = event.target.value;
    setAvailabilityFilter(value);
    onFilter(domainFilter, genderFilter, value);
  };

  return (
    <div>
      <h3>Filters</h3>
      <div>
        <label>Domain:</label>
        <select value={domainFilter} onChange={handleDomainChange}>
          <option value="">All</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <select value={genderFilter} onChange={handleGenderChange}>
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Availability:</label>
        <select value={availabilityFilter} onChange={handleAvailabilityChange}>
          <option value="">All</option>
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
