import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

import Navbar from './components/Navbar';
import Navbar3 from './components/Navbar3';
import Slider from './components/Slider';
import TextSlider from './components/TextSlider';
import Footer from './components/Footer';
import PaymentFooter from './components/PaymentFooter';

import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import Forgetpass from './pages/Forgetpass';
import SignUp from './pages/SignUp';
import Register from './pages/Register';
import WelcomePage from './pages/Welcome';
import PaymentPage from './pages/PaymentPage';
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/forgotpassword" element={<Forgetpass />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
