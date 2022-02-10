/* trabajar sobre este js*/

import './App.css';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import  logo from './images/1618.png'

function App() {
  return (
   <div>
     <header>
       <div className='header-container'>
         <span>La gomiteria</span>
         <img className='logo' src={logo} alt="logotienda" />
        </div>
        <div>
          <Menu/>
        </div> 
     </header>
     <main>
       <div>
         <ItemListContainer greetings="La tienda de golosinas" />
       </div>
     </main>
   </div>
  );
}

export default App;
