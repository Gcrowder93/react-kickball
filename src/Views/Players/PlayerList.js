import React, { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/players-routes';
import { Link } from 'react-router-dom';
import Players from '../../Components/PlayerFunction/Players';

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const playerData = await fetchPlayers();
      setPlayers(playerData);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>loading</h1>;

  return (
    <>
      <div>
        <h1>Player Names</h1>
        <p>
          Back to <Link to={'/'}>Home</Link> or to <Link to={'/teams'}>Teams</Link>.
        </p>

        <div className="player-list">
          {players.map((player) => (
            <Link to={`/players/${player.id}`} key={player.id}>
              <Players {...player} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
