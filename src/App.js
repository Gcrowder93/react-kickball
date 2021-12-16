import kickball from './kickball.jpeg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Views/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={kickball} className="kickball" alt="kickballhome" />
      <BrowserRouter>
        {/* <NavLink to="/" exact>
          Home
        </NavLink> */}
        <br></br>
        <NavLink to="/teams">Teams</NavLink>
        <br></br>
        <br></br>
        <NavLink to="/players">Players</NavLink>
        <Switch>
          <Route path="/">
            {' '}
            <Home />{' '}
          </Route>
          {/* <Route path="/teams"><Teams /></Route> */}
          {/* <Route path="/players"><Players /></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
