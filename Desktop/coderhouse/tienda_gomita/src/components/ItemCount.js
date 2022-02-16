import { counter } from "@fortawesome/fontawesome-svg-core";
import {useState} from 'react';
import './itemCount.css'



function ItemCount ({stock ,initial, onAdd }){
const [itemCounter, setItemCounter] = useState(initial);

   function agregarItems() {
     if(itemCounter < stock) {
        setItemCounter (itemCounter + 1)  
     }
   }
  
   function sacarItems() {
     if(itemCounter > 0 ) {
      setItemCounter (itemCounter - 1)
     }
   }
  
   function agregarCarrito () {
     onAdd (itemCounter)
   }
   

  return (
    <div className="contador" >
      <div>
       <button onClick={agregarItems}>+</button>
         <p>{itemCounter}</p>
         <button onClick={sacarItems}>-</button>
      </div>
         <button className="agregarCarrito" onClick={agregarCarrito}>Agregar al carrito</button>
    </div>
    )
  }  

export default ItemCount;