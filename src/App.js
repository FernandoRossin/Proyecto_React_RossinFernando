import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Error404 from './Components/Error404';
import CartContextProvider from './Components/context/CartContext';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Thankyou from './Components/Thankyou';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path={'/'} element={<ItemListContainer />}/>
              <Route path={'/category/:id'} element={<ItemListContainer />}/>
              <Route path={'/item/:id'} element={<ItemDetailContainer />}/>
              <Route path={'/cart'} element={<Cart />}/>
              <Route path={'/checkout'} element={<Checkout />}/>
              <Route path={'/thankyou/:id'} element={<Thankyou />}/>
              <Route path={'*'} element={<Error404 />}/>
            </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

