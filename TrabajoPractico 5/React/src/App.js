import React, { Component, Fragment } from 'react'
import {Switch,BrowserRouter as Router, Route} from 'react-router-dom'
import Detalle from './components/Detalle/Detalle';
import Ubicacion from './components/DondeEstamos/Ubicacion';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar/>
          <Switch>
           
            <Route exact path="/" component= {Home}></Route>
            <Route exact path="/home" component= {Home}></Route>
            <Route path="/productos" component={Home}></Route>
            <Route path="/detalle/:id" component={Detalle}></Route>
            <Route path="/ubicacion" component={Ubicacion }></Route>
          </Switch>
        </Fragment>
      </Router>

    )
  }
}


export default App;
