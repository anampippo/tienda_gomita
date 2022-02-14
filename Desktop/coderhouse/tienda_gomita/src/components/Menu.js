import React from 'react';
import './menu.css';
import CartWidget from './CartWidget';
import { NavLink} from 'react-router-dom'



function Menu () {
    return (
      <div className='appContenedor'>
        <ul>
          <li><NavLink to="/categoria/Chicles">Chicles</NavLink></li>
          <li><NavLink to="/categoria/Gomitas">Gomitas</NavLink></li>
          <li><NavLink to="/categoria/Caramelos">Caramelos</NavLink></li>
          <li><CartWidget/></li>
        </ul>
      </div>

    );
}


export default Menu;