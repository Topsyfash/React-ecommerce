import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import SignIn from './Pages/SignIn';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Login from './Pages/Login';
import Payment from './Pages/Payment';


function App() {







  return (
    <HashRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />

          <Route path='/mens'
            element={<ShopCategory
              banner={men_banner}
              category="men"

            />}

          />
          <Route path='/womens'
            element={<ShopCategory
              banner={women_banner}
              category="women"

            />}

          />
          <Route path='/kids'
            element={<ShopCategory
              banner={kid_banner}
              category="kid"

            />}

          />

          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/payment' element={<Payment />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
