import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Home } from './Home';
import { NavBar } from './NavBar';
import { Coding } from './Coding';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path='/coding' component={Coding} />
        </div>
      </Router>
    )
  }
}
export default App;