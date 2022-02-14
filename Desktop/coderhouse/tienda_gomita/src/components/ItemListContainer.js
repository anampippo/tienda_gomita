
import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getItems } from '../api/api';
import { useParams } from 'react-router-dom';


function ItemListContainer ({greetings}) {
   
const [itemList, setItemList] = useState([]);
const { categoriaName } = useParams(); 



useEffect (() => {
   getItems ().then ((items) => {
      if (!categoriaName) {
         setItemList (items);
      } else {
         const itemsCategory = items.filter ((producto) => {
         return producto.categoria === categoriaName;
      });

      setItemList (itemsCategory);
    }

     }).catch ((error) => {
        console.log (error)
   });
}, [categoriaName] );



   function agregarItems (count) {
      console.log('Cantidad agregaga: ', count)
   }
    return (
      <div>
       <h1>{greetings}</h1>
      {
        itemList.length === 0 ?
        <p>Cargando golosinas</p> :
        <ItemList items={itemList}/>
      }
      <ItemCount stock={5} intial={0} onAdd={agregarItems}/> 
      </div>
    ) 
}


export default ItemListContainer;
