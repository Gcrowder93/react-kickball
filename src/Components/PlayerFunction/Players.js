import React from 'react'; //deleting this takes to new page
import { Link } from 'react-router-dom';

export default function Players({ name, id }) {
  return (
    <div className="player">
      <Link to={`/players/${id}`}></Link>
      <h2>{name}</h2>
    </div>
  );
}
