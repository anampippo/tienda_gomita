import React from 'react';
import './menu.css';
import CartWidget from './CartWidget';



function Menu () {
    return (
      <div>
        <ul>
          <li>Golosinas</li>
          <li>Gomitas</li>
          <li>Box de regalos</li>
          <li>Contacto</li>
          <li><CartWidget/></li>
        </ul>
      </div>

    );
}


export default Menu;