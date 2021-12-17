import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
// import Teams from './Components/TeamFunction/Teams';
import TeamList from './Views/Teams/TeamList';
import Players from './Components/PlayerFunction/Players';

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
          <Route path="/players">
            <Players />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
