
import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getItems } from '../api/api';


function ItemListContainer ({greetings}) {
   
const [itemList, setItemList] = useState([]);

useEffect (() => {
   getItems ().then (function (items) {
       setItemList (items);
   });
}, [] );

   function agregarItems (count) {
      console.log('Cantidad agregaga: ', count)
   }
    return (
      <div>
      {
        itemList.length === 0 ?
        <p>Cargando</p> :
        <ItemList items={itemList}/>
      }
      <h1>{greetings}</h1>
      <ItemCount stock={5} intial={0} onAdd={agregarItems}/> 
      </div>
    ) 
}


export default ItemListContainer;
