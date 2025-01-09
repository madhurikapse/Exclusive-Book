import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart';
import BookDetailsPage from './components/BookDetailsPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import WishlistPage from './pages/WishlistPage';
import Forgetpass from "./pages/Forgetpass"
import SignUpPage from './pages/SignUp';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import Slider from './components/Slider';
import TopBooks from './components/TopBook';
import Wishlist from './components/Wishlist';
import BookSlider from './components/BookSlider';
import NonFiction from './components/NonFiction';
import BiographyBestsellers from './components/BiographyBestsellers';
import TextSlider from './components/TextSlider';
function App() {

  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
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
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/book/:id" element={<BookDetailsPage/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
        <Route path="/forgot-password" element={<Forgetpass/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />
        <Route
          path="/"
          element={<TopBooks setWishlist={setWishlist} setCartItems={setCartItems} />}
        />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
