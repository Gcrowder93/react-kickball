import React from 'react';
import { Link } from 'react-router-dom';

export default function Teams() {
  return (
    <div>
      <p>
        Back to <Link to={'/'}>Home</Link> or to <Link to={'/players'}>Players</Link>.
      </p>
      <h2>List of Teams</h2>
    </div>
  );
}
