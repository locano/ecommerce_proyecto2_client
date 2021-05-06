import React from 'react';
import './AppUser.css';
import Navbar from './components/Usuarios/navbarUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/paginas/Users/homeUser';
import Settings from './components/paginas/Users/settingsUser';
import Logout from './components/paginas/Users/logoutUser';
import Ecommerce from './components/Ecommerce/Ecommerce';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/settings' component={Settings} />
          <Route path='/logout' component={Logout} />
          <Route path='/shop' component={Ecommerce} />

        </Switch>
      </Router>
    </>
  );
}

export default App;