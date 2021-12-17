import { useEffect, useState } from 'react';
import { fetchTeams } from '../../services/teams-routes';
import { Link } from 'react-router-dom';
// import Teams from '../../Components/TeamFunction/Teams';

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
      <h1>Team Names</h1>
      <ul className="team-list">
        {teams.map((team) => (
          <Link key={team.id} to={`/teams/${team.id}`}>
            {team.name}Team Details
          </Link>
        ))}
      </ul>
    </>
  );
}
