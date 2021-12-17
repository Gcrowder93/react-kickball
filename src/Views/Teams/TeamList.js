import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../../services/teams-routes';
import Teams from '../../Components/TeamFunction/Teams';
import { Link } from 'react-router-dom';

export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamData = await fetchTeams();
      setTeams(teamData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Team Names</h1>
        <p>
          Back to <Link to={'/'}>Home</Link> or to <Link to={'/players'}>Players</Link>.
        </p>

        <div className="team-list">
          {teams.map((team) => (
            <p key={team.id}>
              <Teams teams={team} />
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
