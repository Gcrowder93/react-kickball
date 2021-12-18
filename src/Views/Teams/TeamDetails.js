import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Teams from '../../Components/TeamFunction/Teams';
import { fetchTeams } from '../../services/teams-routes';

export default function TeamsDetails() {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams(id).then(({ data }) => setTeams(data));
  }, [id]);

  return (
    <>
      {/* <span className="teams">
        {city} {state}
      </span> */}
      <Teams teams={teams} />
    </>
  );
}
