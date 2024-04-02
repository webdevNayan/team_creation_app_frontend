import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Simulating fetching users from an API
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data); // Initialize filteredUsers with all users
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = searchTerm => {
    // Filter users based on search term
    const filteredUsers = users.filter(user => {
      const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
    setFilteredUsers(filteredUsers);
  };

  return (
    <div className="container">
      <h1>Users</h1>
      <SearchBar onSearch={handleSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
