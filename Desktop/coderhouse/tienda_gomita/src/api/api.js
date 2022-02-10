 const items = [
    {
      id: 1,
      name: 'Caramelos',
      stock:10,
      price: 50,
      description: 'Caramelos de frutilla',
      pictureUrl: 'https://media.istockphoto.com/photos/assorted-variety-of-sour-candies-includes-extreme-sour-soft-fruit-picture-id1130170786?k=20&m=1130170786&s=612x612&w=0&h=GGJAXrA7_cIYjBGHIp8UmsZ9hglHwFQn3a-xiVhPHIs='
    },
    {
      id: 2,
      name: 'Chicles',
      stock:10,
      price: 60,
      description: 'Chicles de frutilla',
      pictureUrl: 'https://media.istockphoto.com/photos/assorted-variety-of-sour-candies-includes-extreme-sour-soft-fruit-picture-id1130170786?k=20&m=1130170786&s=612x612&w=0&h=GGJAXrA7_cIYjBGHIp8UmsZ9hglHwFQn3a-xiVhPHIs='

    },
    {
      id: 3,
      name: 'Chupetines',
      stock:10,
      price: 70,
      description: 'Chupetines de frutilla',
      pictureUrl: 'https://media.istockphoto.com/photos/assorted-variety-of-sour-candies-includes-extreme-sour-soft-fruit-picture-id1130170786?k=20&m=1130170786&s=612x612&w=0&h=GGJAXrA7_cIYjBGHIp8UmsZ9hglHwFQn3a-xiVhPHIs='

    },
  ];
  
  
  function getItems () {
   return new Promise  ((resolve, reject) =>  {
    setTimeout (() =>  {
        resolve (items);  
      }, 8000);
  });
 }

 export {
     getItems
 }




