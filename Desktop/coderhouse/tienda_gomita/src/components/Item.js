 import { Link } from 'react-router-dom';
 import './Item.css';
 
 
 function Item ({item}) {
   console.log (item);
    return (
    <div className='itemContainer'>
    <Link to={`/productos/${item.id}`}>
      <div className='detalleProducto'> 
        <img src={item.pictureUrl} alt="imagen"/>
        <p className='nombreProducto'>Producto: {item.name}</p>
        <p className='precioProducto'> Precio: $ {item.price}</p>
      </div>
    </Link>
    </div>
   )}


export default Item;