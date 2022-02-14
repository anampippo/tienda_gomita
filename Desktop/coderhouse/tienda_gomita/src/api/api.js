 const items = [
    {
      id: 1,
      name: 'Caramelos',
      stock:10,
      price: 50,
      description: 'Caramelos de yogurth gusto a frutilla',
      categoria: 'Caramelos',
      pictureUrl: 'https://cdn1.costatic.com/assets/img/guide_achat/articles/el-caramelo-sin-azucar-una-posible-alternativa-para-diabeticos_24a9b8c278039187_rs.jpg'
    },
    {
      id: 2,
      name: 'Chicles',
      stock:10,
      price: 60,
      description: 'Chicles de tutifruti, frutilla o menta',
      categoria: 'Chicles',
      pictureUrl: 'https://i0.wp.com/gastronomadas.com.mx/wp-content/uploads/2017/01/El-Chicle-y-sus-curiosidades.jpg?fit=1000%2C622&ssl=1'

    },
    {
      id: 3,
      name: 'Gomitas',
      stock:10,
      price: 70,
      description: 'Gomitas con azucar, dientitos o menta',
      categoria: 'Gomitas',
      pictureUrl: 'https://media.istockphoto.com/photos/assorted-variety-of-sour-candies-includes-extreme-sour-soft-fruit-picture-id1130170786?k=20&m=1130170786&s=612x612&w=0&h=GGJAXrA7_cIYjBGHIp8UmsZ9hglHwFQn3a-xiVhPHIs='

    },
  ];
  
  
  function getItems () {
   return new Promise  ((resolve, reject) =>  {
    setTimeout (() =>  {
        resolve (items);  
      }, 500);
  });
 }

 export {
     getItems
 }




