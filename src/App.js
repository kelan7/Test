import React from 'react';
import './App.css';
import Sitebar from './components/sitebar/Sitebar';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  
  return (
    <BrowserRouter>
      <div className='main_wrapper'>
        <Header />
        <Sitebar />
        <Content state={props.state} message={props.newMessage} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
