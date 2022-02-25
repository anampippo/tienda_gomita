import './ItemDetail.css'
import ItemCount from './ItemCount'
import { useContext, useState }  from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
 
function ItemDetail ({item}) {

const [itemCount, setItemCount] = useState(false);
const {addToCart} = useContext ( CartContext ) ;
//const {handleMessage} = useContext (MessageContext);


   function onAddItem (newItemCount) {
   setItemCount (true);
   addToCart(item, newItemCount) 
   };

    return (
            <div className='itemContainer'>
              <div className='detalleProducto'>
                <img src={item.pictureUrl} alt="imagen"/>
                <p className='nombreProducto'>Producto: {item.name}</p>
                <p className='precioProducto'>Precio: ${item.price}</p>
                <p className='descripcionProducto'>Descripcion: {item.description}</p>
                <p className='categoriaProducto'>Categoria: {item.categoria}</p>
                <p className='stockProducto'>Stock: {item.stock}</p>
              {itemCount ? ( 
                <Link to="/cart">Terminar la compra</Link>
               ) : (
              <ItemCount stock={5} initial={1} onAdd={onAddItem}/>
              )
            }
            </div>
        </div>
     )};
     
              
export default ItemDetail;