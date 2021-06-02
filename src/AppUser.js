import React, { useState, useRef } from 'react';
import './AppUser.css';
import Navbar from './components/Usuarios/navbarUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Settings from './components/paginas/Users/settingsUser';
import Logout from './components/paginas/Users/logoutUser';
import Login from './components/Usuarios/Login/Login';
import Shop from './components/Ecommerce/Shop/Shop';
import Cart from './components/Ecommerce/Cart/Cart';
import Receipt from './components/Ecommerce/Receipt/Receipt';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Reports from './components/Usuarios/button';
import { BsFillChatDotsFill } from 'react-icons/bs';
import Chat from '../src/components/Chat/Chat/Chat';



function App() {
  const [habilitarChat, setHabilitarChat] = useState(false);
  const openChat = () =>{
    setHabilitarChat(!habilitarChat)
  }
  return (
    <>
    
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
        
          <div>     
          <Navbar />
            
            <Route path='/user/settings' component={Settings} />
            <Route path='/user/shop' component={Shop} />
            <Route path='/user/cart' component={Cart} />
            <Route path='/logout' component={Logout} />
            <Route path='/user/receipt' component={Receipt} />
          </div>
        </Switch>
      </Router>
      {
        habilitarChat? <div className = 'sticky-bottom-chat'><Chat/></div>: null
      }
      <button className="floating-button-chat" >
        <BsFillChatDotsFill
          size={"50px"}
          className={"m-0"}
          onClick={openChat}
        />
      </button>  
    </>
  );
}

export default App;