// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { GetTeams } from '../../Components/TeamFunction/Teams';
// import { getTeamById } from '../../Components/TeamFunction/Teams';

// function TeamDetails() {
//   const { id } = useParams(); // TODO: Use id from route
//   const [team, setTeam] = useState(null);

//   useEffect(() => {
//     getTeamById(id).then(({ teams }) => setTeam(teams));
//   }, [id]);
//   if (!team) return <h3>Loading teams...</h3>;

//   return (
//     <>
//       <GetTeams team={team} showDetail />
//     </>
//   );
// }

// export default TeamDetails;
