import './ItemDetail.css'

function ItemDetail ({item}) {
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
            </div>
     )}
export default ItemDetail;