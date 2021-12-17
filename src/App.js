import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
// import Teams from './Components/TeamFunction/Teams';
import TeamList from './Views/Teams/TeamList';
import PlayerList from './Views/Players/PlayerList';
// import Players from './Components/PlayerFunction/Players';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/teams:id">
            <TeamList />
          </Route>
          <Route path="/teams">
            <TeamList />
          </Route>
          <Route path="/players:id">
            <PlayerList />
          </Route>
          <Route path="/players">
            <PlayerList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
