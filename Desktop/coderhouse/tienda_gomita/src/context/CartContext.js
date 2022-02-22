import { createContext, useState } from "react";

export const CartContext = createContext ([]);

const CartContextProvider = ({children}) => {

     const [cart , setCart ] = useState ([])

     const onAddItem = (item) => {
         setCart (...[cart , {cantidad}])
     }
  
     console.log (cart);
     return (
         <CartContextProvider value={{cart , agregarCarrito}}>
            {children}
         </CartContextProvider>

     )
}


