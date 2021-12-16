import kickball from './kickball.jpeg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Views/Home/Home';
import Teams from './Components/TeamFunction/Teams';
import Players from './Components/PlayerFunction/Players';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={kickball} className="kickball" alt="kickballhome" />
      <BrowserRouter>
        {/* <NavLink to="/" exact>
          Home
        </NavLink> */}
        {/* <NavLink to="/teams">Teams</NavLink> */}
        {/* <NavLink to="/players">Players</NavLink> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/players">
            <Players />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
