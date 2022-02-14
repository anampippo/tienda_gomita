import { useEffect , useState } from 'react';
import {getItems} from '../api/api'
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer () {
 const [item, setItem] = useState();
 
useEffect (() => {
const itemId = 1; 

    getItems ().then ((items) => {
     const item =  items.find ((i) => i.id === itemId)
     setItem (item);

    });
 }, [] );
 
return (
  <div>
     {! item ? <p>Cargando</p> : <ItemDetail item={item} />}
  </div>

)}



