import { useEffect , useState } from 'react';
import {getItems} from '../api/api'
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer () {
 const [productoList, setProductoList] = useState([]);
 
useEffect (() => {
    getItems ().then ((items) => {
     const item =  items.find ((i) => i.id === 3)
     setProductoList (items);

    });
 }, [] );
 
}



