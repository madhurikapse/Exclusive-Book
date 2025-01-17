import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import BookDetailsPage from './components/BookDetailsPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import WishlistPage from './pages/WishlistPage';
import Forgetpass from "./pages/Forgetpass"
import SignUp from './pages/SignUp';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import Slider from './components/Slider';
import TopBooks from './components/TopBook';
import Wishlist from './components/Wishlist';
import BookSlider from './components/BookSlider';
import NonFiction from './components/NonFiction';
import BiographyBestsellers from './components/BiographyBestsellers';
import TextSlider from './components/TextSlider';
import ChildrenBestsellers from './components/Children\'sBestsellers';
import Footer from './components/Footer';
 import PaymentFooter from "./components/PaymentFooter"
import Register from './pages/Register';
import WelcomePage from './pages/Welcome';
function App() {

  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  return (
      <div className="App">
        
      
      <Navbar wishlist={wishlist} cartItems={cartItems} />
      <Navbar2/>
      <Navbar3/>
      <Slider/>
      <TopBooks setCartItems={setCartItems} />
      <BookSlider/>
      <NonFiction/>
      <BiographyBestsellers/>
      <TextSlider/>
      <ChildrenBestsellers  setCartItems={setCartItems}/>
      <Footer/>
      <PaymentFooter/>
        <Routes>
        <Route  path='/register' element={<Register/>}/>
        <Route  path='/login' element={<LoginPage/>}/>
        <Route path='/welcome' element={<WelcomePage/>}/>
          <Route path="/book/:id" element={<BookDetailsPage/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
        <Route path="/forgotpassword" element={<Forgetpass/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route
          path="/"
          element={<TopBooks setWishlist={setWishlist} setCartItems={setCartItems} />}
        />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
  );
}

export default App;
