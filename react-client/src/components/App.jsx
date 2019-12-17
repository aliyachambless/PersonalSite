import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Home } from './Home';
import { NavBar } from './NavBar';
import { Coding } from './Coding';
import { Art } from './Art';
import { DesignPortfolio } from './DesignPortfolio';
import { Simmer } from './Simmer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar loc={window.location.pathname}/>
          <Route exact path="/" component={Home} />
          <Route exact path='/coding' component={Coding} />
          <Route exact path='/art' component={Art} />
          <Route exact path='/design' component={DesignPortfolio} />
          <Route exact path='/simmer' component={Simmer} />
        </div>
      </Router>
    )
  }
}
export default App;