import React from 'react';
import { Link } from 'react-router-dom';

export default function Teams({ teams: { id, name, city, state } }) {
  return (
    <section>
      <Link className="teamdetails" to={`/teams/${id}`}>
        <h1>{name}</h1>
      </Link>
      <div className="content">
        <h3>
          {city}, {state}
        </h3>
      </div>
    </section>
  );
}
