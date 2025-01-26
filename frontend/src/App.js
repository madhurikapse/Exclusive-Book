import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import BookDetailsPage from './components/BookDetailsPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import WishlistPage from './pages/WishlistPage';
import Forgetpass from './pages/Forgetpass';
import SignUp from './pages/SignUp';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import Slider from './components/Slider';
import TopBooks from './components/TopBook';
import BookSlider from './components/BookSlider';
import NonFiction from './components/NonFiction';
import BiographyBestsellers from './components/BiographyBestsellers';
import TextSlider from './components/TextSlider';
import ChildrenBestsellers from './components/ChildrenBestsellers';
import Footer from './components/Footer';
import PaymentFooter from './components/PaymentFooter';
import Register from './pages/Register';
import WelcomePage from './pages/Welcome';
import ProductList from './pages/ProductList';
import HomePage from './components/SearchResults';
import SearchResults from './components/SearchResults';

function App() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleBookClick = (book) => {
    setWishlistItems((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === book.id)) {
        return [...prevWishlist, book];
      }
      return prevWishlist;
    });
  };

  return (
    <Router>
      <Navbar wishlist={wishlistItems} cartItems={cart} />
      <Navbar2 />
      <Navbar3 />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Slider />
              <TopBooks
                setCart={setCart}
                setWishlistItems={setWishlistItems}
                handleBookClick={handleBookClick}
              />
              <BookSlider />
              <NonFiction
                setCart={setCart}
                setWishlistItems={setWishlistItems}
                handleBookClick={handleBookClick}
              />
              <BiographyBestsellers
                setCart={setCart}
                setWishlistItems={setWishlistItems}
                handleBookClick={handleBookClick}
              />
              <TextSlider />
              <ChildrenBestsellers
                setCart={setCart}
                setWishlistItems={setWishlistItems}
                handleBookClick={handleBookClick}
              />
              <Footer />
              <PaymentFooter />
            </>
          }
        />

        {/* Other Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/wishlist"
          element={<WishlistPage wishlist={wishlistItems} setWishlistItems={setWishlistItems} />}
        />
        <Route path="/forgotpassword" element={<Forgetpass />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/search-results" element={<SearchResults/>} />
        <Route
          path="/topbooks"
          element={<TopBooks setCart={setCart} handleBookClick={handleBookClick} />}
        />
        <Route
          path="/biography"
          element={<BiographyBestsellers setCart={setCart} />}
        />
        <Route
          path="/childrenbestsellers"
          element={<ChildrenBestsellers setCart={setCart} />}
        />
        <Route path="/book-details/:id" element={<BookDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
