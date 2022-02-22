import React, { useContext } from "react";
import { CartContext } from '../context/CartContext'
const Cart = () => {

const {cart} = useContext (CartContext);

    return (
      <>
        {cart.map ((item)=> {
               <div key={item.id}>
                    <h3>{item.name}</h3>
               </div>
        })}
     </>
   )
}


export default Cart;