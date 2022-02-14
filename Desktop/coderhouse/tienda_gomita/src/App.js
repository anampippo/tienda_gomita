/* trabajar sobre este js*/

import './App.css';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import  logo from './images/1618.png'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
   <div>
     <header>
       <div className='header-container'>
         <h1>La gomiteria</h1>
         <img className='logo' src={logo} alt="logotienda" />
        </div>
        <div>
          <Menu/>
        </div> 
     </header>
     <main>
       <div className='desktop-container'>
         <ItemListContainer greetings="La tienda de golosinas" />
         <ItemDetailContainer/>
       </div>
     </main>
   </div>
  );
}

export default App;
