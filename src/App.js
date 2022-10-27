import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Route,Navigate,Routes }  from "react-router-dom"
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  
  return (
  
  <BrowserRouter>
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </CartProvider>
  </BrowserRouter>
  );
}

export default App;
 

