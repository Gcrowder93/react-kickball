import React from 'react';
import { Link } from 'react-router-dom';

export default function Teams({ team: { id, name, city, state } }) {
  return (
    <article className="team">
      <Link to={`/teams/${id}`}></Link>
      <h2>Name: {name}</h2>
      <h3>City: {city}</h3>
      <h3>State: {state}</h3>
    </article>
  );
}
