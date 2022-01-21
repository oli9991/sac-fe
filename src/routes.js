import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ColdStart from './pages/ColdStart';
import FindBooks from './pages/FindBooks';
import Home from './pages/Home';
import Login from './pages/Login';
import Results from './pages/Results';

export const CRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/register' element={<Login register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/findBooks' element={<FindBooks />} />
        <Route exact path='/coldStart' element={<ColdStart />} />
        <Route exact path='/results' element={<Results />} />
      </Routes>
    </Router>
  );
};
