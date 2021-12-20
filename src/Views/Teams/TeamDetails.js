import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Teams from '../../Components/TeamFunction/Teams';
import { fetchTeams, getTeamById } from '../../services/teams-routes';

export default function TeamsDetails() {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeamById(id).then(({ data }) => setTeams(data));
  }, [id]);

  return (
    <section>
      <div>
        <Teams team={teams} />
      </div>
    </section>
  );
}
