import React from 'react';
import { Link } from 'react-router-dom';

export default function Teams({ id, name }) {
  return (
    <div className="team">
      <Link to={`/teams/${id}`}></Link>
      <h2>{name}</h2>
    </div>
  );
}
