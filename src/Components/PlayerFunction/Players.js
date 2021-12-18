import React from 'react'; //deleting this takes to new page
import { Link } from 'react-router-dom';

export default function Players({ players: { name, id, position, team_id } }) {
  return (
    <section>
      {/* <Link className="playerdetails" to={`/players/${id}`}> */}
      {/* <h1>{name}</h1> */}
      {/* </Link> */}
      <div className="content">{/* <h3>{position}</h3> */}</div>
    </section>
  );
}

// showDetail = false }) {
//   return (
//     <Link to={`/players/${Players.id}`} className="player">
//       <h3>{name}</h3>
//       <address>
//         {teams.map((name) => (
//           <Players key={name.team_id} name={name} />
//         ))}
//       </address>
//       {showDetail && (
//         <>
//           <p>Name: {name}</p>
//           <p>Number: {number}</p>
//         </>
//       )}
//     </Link>
//   );
// }
