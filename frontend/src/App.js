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
import BookDetails from './components/BookDetailsPage';
import ProductList from './pages/ProductList';

function App() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  // Function to add book to wishlist and cart
  const handleBookClick = (book) => {
    // Add to wishlist
    setWishlistItems((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === book.id)) {
        return [...prevWishlist, book];
      }
      return prevWishlist;
    });

    
  };

  return (
    <Router>
      <Navbar wishlist={wishlistItems} cartItems={cart}/>
              <Navbar2 />
              <Navbar3 />
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Slider />
              <TopBooks
                setCart={setCart}
                setWishlistItems={setWishlistItems}
                handleBookClick={handleBookClick} // Pass the click handler
              />
              <BookSlider />
              <NonFiction  setCart={setCart}
                setWishlistItems={setWishlistItems}
                handleBookClick={handleBookClick} />
              <BiographyBestsellers 
                setCart={setCart}
                setWishlistItems={setWishlistItems}
                handleBookClick={handleBookClick} />
              <TextSlider />
              <ChildrenBestsellers
                setCart={setCart}
                setWishlistItems={setWishlistItems}
                handleBookClick={handleBookClick} // Pass the click handler
              />
              <Footer/>
              <PaymentFooter/>
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/wishlist"
          element={<WishlistPage wishlist={wishlistItems} setWishlistItems={setWishlistItems} />}
        />
        <Route path="/forgotpassword" element={<Forgetpass />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/TopBook"
          element={<TopBooks setCart={setCart} handleBookClick={handleBookClick} />}
        />
        <Route
          path="/biography"
          element={<BiographyBestsellers setCart={setCart} />}
        />
        <Route
          path="/ChildrenBestsellers"
          element={<ChildrenBestsellers setCart={setCart} />}
        />
        <Route path="/book-details/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
