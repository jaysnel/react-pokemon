import Home from './Home.js'
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokemon from './Pokemon.js';
import AboutPage from './About.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <AboutPage/>
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
