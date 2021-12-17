import React from 'react';
import { Link } from 'react-router-dom';
import kickball from './kickball.jpeg';

export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to the Kickball League!</h1>
      <img src={kickball} className="kickball" alt="kickballhome" />
      <p>
        Search for a <Link to={'/teams'}>Team</Link> or a <Link to={'/players'}>Player</Link>.
      </p>
    </div>
  );
}
