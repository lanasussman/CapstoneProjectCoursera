import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import MainRouting from './components/MainRouting';

function App() {
  return (
    <>
      <Header /> {/* Navbar */}
      <MainRouting />
      <Footer />
    </>
  );
}

export default App;
