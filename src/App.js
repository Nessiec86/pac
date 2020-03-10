import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound';
import Pac from './pages/Pac';
import Home from './pages/Home';

require('dotenv').config();

class App extends Component {
  
  render () {  
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Pac" component={Pac} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    );
  }
}

export default App;