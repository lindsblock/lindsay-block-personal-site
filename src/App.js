import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './index.css';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
