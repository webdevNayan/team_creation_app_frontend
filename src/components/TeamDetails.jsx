import React from 'react';

const TeamDetails = ({ team }) => {
  return (
    <div>
      <h3>Team Details</h3>
      <p>Team Name: {team.name}</p>
      <p>Selected Users:</p>
      <ul>
        {team.users.map(user => (
          <li key={user.id}>
            {`${user.first_name} ${user.last_name}`} - {user.domain}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamDetails;
