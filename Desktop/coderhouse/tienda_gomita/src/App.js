/* trabajar sobre este js*/

import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import  logo from './images/1620.png'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartContext } from './context/CartContext';
import CartContextProvider from './context/CartContext'

function App() {
  return (
<CartContextProvider>
  <BrowserRouter>
   <div>
     <header>
       <div className='desktopContainer'>  
       <div className='logoContainer'>
        <Link to="/">
          <div className='logo'>
              <img src={logo} alt="logotienda" />
              <span> La gomiteria </span>
          </div>
        </Link>
        </div>
         <Menu/>
        </div> 
     </header>
     <main>
       <div className='desktop-container'>
        <Routes>
          <Route
            path="/"
             element={<ItemListContainer greetings="La tienda de golosinas" />}/> 

           <Route 
             path="/categoria/:categoriaName"
             element={<ItemListContainer greetings="Categorias" />}/>

          <Route 
            path="/productos/:itemId"
             element={<ItemDetailContainer/>}/> 

          <Route
          path="/Cart"
          element={<Cart/>}/>

          <Route 
           path="*"
           element = {<div>
                        <h2>No encontramos la pagina</h2>
                        <Link to="/" >{'<<'} Volver a La Gomiteria</Link>
                      </div>}
          />
        </Routes>
       </div>
     </main>
   </div>
  </BrowserRouter>
</CartContextProvider>  
  );
}

export default App;
