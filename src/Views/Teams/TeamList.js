import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../../services/teams-routes';

export default function TeamList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TeamList Teams={data} />
    </div>
  );
}
