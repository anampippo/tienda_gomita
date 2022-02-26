import { createContext, useState } from "react";

export const CartContext = createContext ([]);

const CartContextProvider = ({children}) => {

const [cart , setCart ] = useState ([])

const addToCart = (item, cantidad) => {
        if (isOnCart(item.id)) {
         sumarCantidad(cantidad,item);
        } else {
         setCart([...cart, { ...item, cantidad }]);
        }
       };
      
const isOnCart = (Id) => {
const respuesta = cart.some((item) => item.Id === Id);
return respuesta;
};
      
const sumarCantidad = (cantidad, item) => {
const copia = [...cart];
  copia.forEach((producto) => {
  if (producto.Id === item.Id) {
  producto.cantidad += cantidad;
      }
    });
  };
 const vaciarCarro = () => {
      setCart([]);
    };
      
const sacarItem = (id) => {
setCart(cart.filter((producto) => producto.id !== id))
 }

    return (
 <CartContext.Provider value={{cart, addToCart, vaciarCarro, sacarItem}}>
    {children}
</CartContext.Provider>

     )
}

export default CartContextProvider;

