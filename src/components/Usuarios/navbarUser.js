import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, withRouter } from 'react-router-dom';
import { SidebarData } from './sidebarUser';
import './navbarUser.css';
import { IconContext } from 'react-icons';
import { auth, firebase } from "../../config/firebase.config";


function LogOut(){

}

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const openCart = () =>{
    //Se abre el carrito
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to='#' className='menu-cart'>
            <AiIcons.AiOutlineShoppingCart onClick={openCart} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
                <li className='nav-text'>
                  <button onClick = {() => {
                      auth.signOut()
                      props.history.push("/")
                  }}>
                    <AiIcons.AiOutlineUserDelete />
                    <span>Logout</span>
                  </button>
                </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default withRouter(Navbar);