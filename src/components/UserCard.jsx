import React from 'react';
import { Card } from 'react-bootstrap';

const UserCard = ({ user }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.avatar} />
      <Card.Body>
        <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {user.email}
        </Card.Text>
        <Card.Text>
          <strong>Gender:</strong> {user.gender}
        </Card.Text>
        <Card.Text>
          <strong>Domain:</strong> {user.domain}
        </Card.Text>
        <Card.Text>
          <strong>Availability:</strong> {user.available ? 'Available' : 'Not Available'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
