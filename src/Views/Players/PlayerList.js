import { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/players-routes';
import { Link } from 'react-router-dom';

export default function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const playerData = await fetchPlayers();
      setPlayers(playerData);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Player Names</h1>
      <p>
        Back to <Link to={'/'}>Home</Link> or to <Link to={'/teams'}>Teams</Link>.
      </p>
      <ul className="player-list">
        {players.map((player) => (
          <Link key={player.id} to={`/players/${player.id}`}>
            {player.name}
            <br></br>
          </Link>
        ))}
      </ul>
    </>
  );
}
