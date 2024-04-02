import React, { useState } from 'react';

const TeamCreation = ({ users, onCreateTeam }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  
  const handleUserSelect = (userId) => {
    // Check if the user is already selected
    if (selectedUsers.includes(userId)) {
      // If already selected, remove from the selectedUsers array
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      // If not selected, add to the selectedUsers array
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleCreateTeam = () => {
    // Pass the selectedUsers array to the onCreateTeam function passed from the parent component
    onCreateTeam(selectedUsers);
    // Clear the selected users after creating the team
    setSelectedUsers([]);
  };

  return (
    <div>
      <h3>Create Team</h3>
      <div>
        <h5>Select users for the team:</h5>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <input
                type="checkbox"
                checked={selectedUsers.includes(user.id)}
                onChange={() => handleUserSelect(user.id)}
              />
              {`${user.first_name} ${user.last_name}`}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleCreateTeam}>Create Team</button>
    </div>
  );
};

export default TeamCreation;
