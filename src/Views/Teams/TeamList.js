import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../../services/teams-routes';
import Teams from '../../Components/TeamFunction/Teams';
import { Link } from 'react-router-dom';

export default function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const teamData = await fetchTeams();
      setTeams(teamData);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>loading</h1>;
  return (
    <>
      <div>
        <h1>Team Names</h1>
        <div>
          Back to <Link to={'/'}>Home</Link> or to <Link to={'/players'}>Players</Link>.
        </div>

        {
          <div className="team-list">
            {teams.map((team) => (
              <Link to={`/teams/${team.id}`} key={team.id}>
                <Teams {...team} />
              </Link>
            ))}
          </div>
        }
      </div>
    </>
  );
}
