
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BookList/>} />
          <Route path="/book/:id" element={<BookDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
