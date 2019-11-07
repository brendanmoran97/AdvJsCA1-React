/**
 * @Date:   2019-10-21T10:56:08+01:00
 * @Last modified time: 2019-11-07T12:38:43+00:00
 */
import React, {Component} from 'react';
import Characters from './components/characters';
import Episodes from './components/episodes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Brendan from './pages/brendanMoran';
import NavBar from './pages/nav';


// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <BrowserRouter>
    <NavBar/>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/characters" component = {Characters} />
          <Route exact path = "/episodes" component = {Episodes} />
          <Route exact path = "/brendanMoran" component = {Brendan} />
        </Switch>
      </BrowserRouter>
    );
  }


  }

  export default App;
