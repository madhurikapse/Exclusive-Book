import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart';
import BookDetailsPage from './components/BookDetailsPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import WishlistPage from './pages/WishlistPage';
import Forgetpass from "./pages/Forgetpass"
import SignUpPage from './pages/SignUp';
function App() {
  return (
    <Router>
      <div className="App">
        
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/book/:id" element={<BookDetailsPage/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
        <Route path="/forgot-password" element={<Forgetpass/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
