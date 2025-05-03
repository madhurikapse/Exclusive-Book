import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

import Navbar from './components/Navbar';
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

import Cart from './pages/Cart';
import BookDetailsPage from './components/BookDetailsPage';
import LoginPage from './pages/LoginPage';
import WishlistPage from './pages/WishlistPage';
import Forgetpass from './pages/Forgetpass';
import SignUp from './pages/SignUp';
import Register from './pages/Register';
import WelcomePage from './pages/Welcome';
import ProductList from './pages/ProductList';
import HomePage from './components/SearchResults';
import SearchResults from './components/SearchResults';
import CheckoutPage from './pages/ChackoutPage';
import PaymentPage from './pages/PaymentPage';
import OrderConfirmation from './pages/OrderConfirmation';
import { ToastContainer } from 'react-toastify';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
    
      <Navbar3 />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Slider />
      <About/>
              <TextSlider />
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
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/forgotpassword" element={<Forgetpass />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/topbooks" element={<TopBooks />} />
        <Route path="/biography" element={<BiographyBestsellers />} />
        <Route path="/childrenbestsellers" element={<ChildrenBestsellers />} />
        <Route path="/book-details/:id" element={<BookDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
