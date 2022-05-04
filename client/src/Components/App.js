import React from 'react';
import '../App.css';
import Header from './Header';
import Greeting from './Greeting';
import Bio from './Bio';
import Projects from './Projects';
import Cats from './Cats';
import Footer from './Footer';
import ScrollToTop from "react-scroll-to-top";  
import { BiArrowToTop } from 'react-icons/bi'

function App() {

  return (
    <div id="app">
      <ScrollToTop smooth color="#9885a5"
      // component={<BiArrowToTop />} 
      />
      <Header />
      <Greeting />  
      <Bio /> 
      <Projects />
        {/* <Cats /> */}
      <Footer />
    </div>
  );
}

export default App;
