import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'


const Cart = () => {

const {cart, vaciarCarro, sacarItem} = useContext (CartContext);

return (
  <>
      {cart.length === 0 ? (
          <>
              <h1>No agregaste ningun producto al carrito</h1>
              <Link to="/">
                <h1>Volver a la tienda</h1>
              </Link>
          </>
      ) : (
          <>
              {cart.map((golosinas) => (
                  <div key={golosinas.id}>
                      <h3>{golosinas.name}</h3>
                      <h3>{golosinas.cantidad}</h3>
                      <button onClick={() => sacarItem(golosinas.id)}>
                          X
                      </button>
                  </div>
              ))}
              <button onClick={vaciarCarro}>Vaciar el carrito de compras</button>
          </>
      )}
  </>
);
};

export default Cart;