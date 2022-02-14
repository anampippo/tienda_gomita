

function ItemDetail ({items}) {
    return (
            <div>
             <img src={item.pictureUrl} alt="imagen"/>
              <div>
                <p>{item.price}</p>
                <p>{item.name}</p>
              </div>
            </div>
     )}
export default ItemDetail;