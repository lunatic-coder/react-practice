import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link,  } from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.css'
 import './App.css'


import Error from './components/Error';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components//Footer'

class App extends Component{
  

  render(){
    return(
      <>
        <Router>
          {/* <nav className="navbar navbar-dark bg-dark"> */}
          <nav className="navbar navbar-dark bg-dark">
    

            <ul className="nav navbar-nav ml-auto">

              
             
              <li className='nav-item'>
              <Link to='/login' className="nav-link">Login</Link>
              </li>
              <li className='nav-item'>
                <Link to='signup' className="nav-link">Signup</Link>
              </li>
            
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route component={Error} />
            {/* <Route render={() => <Redirect to={{pathname: 'home'}} /> } /> */}
  
          </Switch>
  <Footer />
        </Router>
  
      </>
    )
  }
  
}

export default App;