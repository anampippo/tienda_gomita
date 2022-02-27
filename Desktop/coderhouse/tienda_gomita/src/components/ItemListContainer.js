

import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getItems } from '../api/api';
import { useParams } from 'react-router-dom';
import { getDocs , collection } from 'firebase/firestore';
import { db } from '../firebase';

function ItemListContainer ({greetings}) {
   
const [itemList, setItemList] = useState([]);
const { categoriaName } = useParams(); 



   useEffect (() => {

      getDocs (collection(db, "items"))
      .then (snapshot => {
         const items = snapshot.docs.map ((doc) => ({id: doc.id, ...doc.data () }))
      if (!categoriaName || categoriaName === "all")  {
         setItemList (items)
      } else {
         setItemList (items.filter (item=> item.categoriaName === categoriaName))

        }
      })
      .catch (error => {
         console.log (error )
      })
    /*  .finally (() => {
         setLoading (false)
      })*/

    }, [categoriaName] );


    return (
      <div>
       <h1>{greetings}</h1>
      {
        itemList.length === 0 ?
        <p>Cargando golosinas</p> :
        <ItemList items={itemList}/>
      }
      </div>
    ) 
}


export default ItemListContainer;