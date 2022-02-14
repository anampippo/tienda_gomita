import { useEffect , useState } from 'react';
import {getItems} from '../api/api'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer () {
 const [item, setItem] = useState();
 const {itemId} = useParams ();


useEffect (() => {

    getItems ().then ((items) => {
     const item =  items.find ((i) => {
        console.log (typeof i.id)
        console.log (typeof itemId)
        return i.id === parseInt(itemId)
     }); 
      setItem (item);
    }).catch ((error) => {
       console.log (error);
    });   
 }, [itemId] );
 
return (
  <div>
     {! item ? <p>Cargando ...</p> : <ItemDetail item={item} />}
  </div>

)}



