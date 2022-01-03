import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import TeamList from './Views/Teams/TeamList';
import PlayerList from './Views/Players/PlayerList';
import TeamsDetails from './Views/Teams/TeamDetails';
import PlayerDetails from './Views/Players/PlayerDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/teams/:id">
            <TeamsDetails />
          </Route>
          <Route exact path="/teams">
            <TeamList />
          </Route>
          <Route path="/players/:id">
            <PlayerDetails />
          </Route>
          <Route path="/players" exact>
            <PlayerList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
