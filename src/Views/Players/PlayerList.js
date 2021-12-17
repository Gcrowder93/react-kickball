// import React, { useEffect, useState } from 'react';
// import { fetchPlayers } from '../../services/players-routes';

// export default function PlayerList() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchPlayers();
//       setData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <PlayerList Players={data} />
//     </div>
//   );
// }
