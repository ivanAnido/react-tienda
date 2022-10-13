import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Route,Navigate,Routes }  from "react-router-dom"

function App() {
  
  return (
  
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='detalle/:detalleId' element={<ItemDetailContainer/>}/>

    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
 

