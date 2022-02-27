import { useEffect , useState } from 'react';
import {getItems} from '../api/api'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {doc,  getDoc } from 'firebase/firestore'
import {db} from '../firebase'


export default function ItemDetailContainer () {
 const [item, setItem] = useState();
 const {itemId} = useParams ();


useEffect (() => {

   /* getItems ().then ((items) => {
     const item =  items.find ((i) => {
        console.log (typeof i.id)
        console.log (typeof itemId)
        return i.id === parseInt(itemId)
     }); 
      setItem (item);
    }).catch ((error) => {
       console.log (error);
    });   */

    const itemRef  = doc ( db, "items", itemId)
    getDoc (itemRef)
    .then ((snapshot) => {
        if( snapshot.exist ()){
           const item = {id: snapshot.id, ...snapshot.data()}
           setItem (item)
        }
    })
    .catch ( error => {
       console.log (erorr)
    })

 }, [itemId] );
 
return (
  <div>
     {! item ? <p>Cargando ...</p> : <ItemDetail item={item} />}
  </div>

)}



