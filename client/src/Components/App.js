import React from 'react';
import '../App.css';
import Header from './Header';
import HomePage from './HomePage';
import Projects from './Projects';
import Footer from './Footer';

import ScrollToTop from "react-scroll-to-top";  
import { BiArrowToTop } from 'react-icons/bi'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div id="app">
      <ScrollToTop smooth color="#9885a5"
      // component={<BiArrowToTop />} 
      />
      <Header />

      <HomePage />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
