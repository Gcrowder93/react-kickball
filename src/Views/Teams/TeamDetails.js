import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Teams from '../../Components/TeamFunction/Teams';
// import Players from '../../Components/PlayerFunction/Players';
import { getTeamById } from '../../services/teams-routes';
import { Link } from 'react-router-dom';

export default function TeamsDetails() {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);
  // const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeamById(id).then(({ data }) => {
      setTeams(data);
      // setPlayers(data);
      setLoading(false);
    });
  }, [id]);
  if (loading) return <h1>loading</h1>;
  return (
    <section>
      <div>
        <Teams {...teams} />
        <h3>City: {teams.city}</h3>
        <h3>State: {teams.state}</h3>
        {/* <Players {...players} /> */}
        {/* <h4>Players: {players.name}</h4> */}
      </div>
      <p>
        Back to <Link to={'/'}>Home</Link>, <Link to={'/teams'}>Teams</Link>,{' '}
        <Link to={'/players'}>Players</Link>.
      </p>
    </section>
  );
}
