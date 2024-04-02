import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <div className="row">
        {users.map(user => (
          <div className="col-md-4" key={user.id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
