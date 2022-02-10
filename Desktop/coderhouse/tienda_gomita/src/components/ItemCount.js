import { counter } from "@fortawesome/fontawesome-svg-core";
import React, {useState} from 'react';




function ItemCount ({stock ,initial, onAdd}){
 const [count, setCount] = useState(0);

 function agregarItems() {
   if(count < stock) {
      setCount (count + 1)  
   }
 }

 function sacarItems() {
   if(count > 0 ) {
    setCount (count - 1)
   }
 }

 function agregarCarrito () {
   onAdd (count)
 }
 
  return (
    <div className="contador" >
         <button onClick={agregarItems}>+</button>
         <button onClick={sacarItems}>-</button>
         <span> {count} </span>
         <button>Agregar al carrito</button>
     </div>
  )
}

export default ItemCount;