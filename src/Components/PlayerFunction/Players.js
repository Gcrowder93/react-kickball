import React from 'react'; //deleting this takes to new page
import { Link } from 'react-router-dom';

export default function Players() {
  return (
    <div>
      <p>
        Back to <Link to={'/'}>Home</Link> or to <Link to={'/teams'}>Teams</Link>.
      </p>
      <h2>List of Players</h2>
    </div>
  );
}
