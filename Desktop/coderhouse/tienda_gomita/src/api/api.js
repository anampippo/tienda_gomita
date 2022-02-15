 const items = [
    {
      id: 1,
      name: 'Gomitas',
      stock:10,
      price: 70,
      description: 'Gomitas con azucar, dientitos o menta',
      categoria: 'Gomitas',
      pictureUrl: 'https://www.mipatente.com/wp-content/uploads/2019/07/gomitas-antiestre%CC%81s-estudiantes.png'
    },
    {
      id: 2,
      name: 'Chupetines',
      stock:10,
      price: 60,
      description: 'Chupetines de tutifruti, frutilla o menta',
      categoria: 'Chupetines',
      pictureUrl: 'https://images.tcdn.com.br/img/img_prod/763838/pirulito_paitball_pops_bala_infinita_64gr_1977_1_20200819135345.jpg'
      },
      {
        id: 3,
        name: 'Caramelos',
        stock:10,
        price: 50,
        description: 'Caramelos de yogurth gusto a frutilla',
        categoria: 'Caramelos',
        pictureUrl: 'https://st.depositphotos.com/1999025/1901/i/600/depositphotos_19011559-stock-photo-heap-of-color-sweets.jpg'
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




