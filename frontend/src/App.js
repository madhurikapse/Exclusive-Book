import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import BookDetailsPage from './components/BookDetailsPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import WishlistPage from './pages/WishlistPage';
import Forgetpass from "./pages/Forgetpass";
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
import ChildrenBestsellers from './components/Children\'sBestsellers';
import Footer from './components/Footer';
import PaymentFooter from "./components/PaymentFooter";
import Register from './pages/Register';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Navbar wishlist={wishlist} cartItems={cartItems} />
      <Navbar2 />

      <Routes>
        {/* Routes without Navbar and other components */}
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<Forgetpass />} />

        {/* Routes with Navbar and other components */}
        <Route
          path="/"
          element={
            <>
              <Navbar3 />
              <Slider />
              <TopBooks setCartItems={setCartItems} />
              <BookSlider />
              <NonFiction />
              <BiographyBestsellers />
              <TextSlider />
              <ChildrenBestsellers setCartItems={setCartItems} />
            </>
          }
        >
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart cartItems={cartItems} />} />
          <Route path="wishlist" element={<WishlistPage wishlist={wishlist} />} />
          <Route path="book/:id" element={<BookDetailsPage />} />
        </Route>
      </Routes>
      <Footer />
      <PaymentFooter />
    </Router>
  );
}

export default App;
