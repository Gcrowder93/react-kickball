import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Players from '../../Components/PlayerFunction/Players';
import { getPlayerById } from '../../services/players-routes';
import { Link } from 'react-router-dom';

export default function TeamsDetails() {
  const { id } = useParams();
  const [players, setPlayers] = useState([]);
  // const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayerById(id).then(({ data }) => {
      setPlayers(data);
      setLoading(false);
    });
  }, [id]);
  if (loading) return <h1>loading</h1>;
  return (
    <section>
      <div>
        <Players {...players} />
        <h3>Team: {players.team_id}</h3>
        <h3>Position: {players.position}</h3>
      </div>
      <p>
        Back to <Link to={'/'}>Home</Link>, <Link to={'/teams'}>Teams</Link>,{' '}
        <Link to={'/players'}>Players</Link>.
      </p>
    </section>
  );
}
