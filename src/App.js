import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Categories from './Pages/Categories';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Fotter from './Components/Footer/Fotter';



function App() {
  return (
    <div className="App">
      <BrowserRouter>  
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/Men' element={<Categories category='men'/>} />
        <Route path='/Women' element={<Categories category='Women'/>} />
        <Route path='/Kids' element={<Categories category='Kids'/>} />
        <Route path='/Accessories' element={<Categories category='Accessories'/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
      <Fotter/>
    </div>
  );
}

export default App;
