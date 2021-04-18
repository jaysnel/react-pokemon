import Home from './Home.js'
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokemon from './Pokemon.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/pokemon/:id">
            <Pokemon/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
