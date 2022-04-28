import React from 'react';
import '../App.css';
import Header from './Header';
import Greeting from './Greeting';
import Bio from './Bio';
import Projects from './Projects';
import Cats from './Cats';
import Footer from './Footer';

function App() {

  return (
    <div id="app">
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

//こんにちは
// 你好