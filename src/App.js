
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import Products from './component/Products';
import RegistrationPage from './component/Registerd';
import LoginPage from './component/Login';
import CartPage from './component/CartPage';
import store from './redux/Store';
import Deliver from './component/Deliver';
import { Context } from './Context/Context1';
import AddtoCart from './component/AddtoCart';



function App() {
  return (
   <>
   <Context>
   <Navbar/>
   <Routes>
    <Route exact path='/home' Component={Home}/>
    <Route exact path='/products' Component={Product}/>
    <Route exact path='/login' Component={LoginPage}/>
    <Route exact path='/register' Component={RegistrationPage}/>
    <Route exact path='/products/:id' Component={Products}/>
    <Route exact path='/cart' Component={CartPage}/>
    <Route exact path='/deliver' Component={Deliver}/>
    <Route exact path='/comp' Component={AddtoCart}/>
   </Routes>
   </Context>
   </>
  );
}

export default App;
