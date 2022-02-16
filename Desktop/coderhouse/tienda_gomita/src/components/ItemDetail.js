import './ItemDetail.css'
import ItemCount from './ItemCount'
import { useState }  from 'react';
import { Link } from 'react-router-dom'
 
function ItemDetail ({item}) {

const [itemCount, setItemCount] = useState(undefined);


 function onAddItem (newItemCount) {
   console.log (newItemCount)
   setItemCount (newItemCount);
 }


    return (
            <div className='itemContainer'>
              <div className='detalleProducto'>
                <img src={item.pictureUrl} alt="imagen"/>
                <p className='nombreProducto'>Producto: {item.name}</p>
                <p className='precioProducto'>Precio: ${item.price}</p>
                <p className='descripcionProducto'>Descripcion: {item.description}</p>
                <p className='categoriaProducto'>Categoria: {item.categoria}</p>
                <p className='stockProducto'>Stock: {item.stock}</p>
              </div>
              {
               !itemCount ?
              <ItemCount stock={5} initial={1} onAdd={onAddItem}/> :
              <Link to="/cart">Terminar la compra</Link>
              }
            </div>
     )}
export default ItemDetail;