import React from 'react';
import './App.css';
import Sitebar from './components/sitebar/Sitebar';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='main_wrapper'>
        <Header />
        <Sitebar />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
