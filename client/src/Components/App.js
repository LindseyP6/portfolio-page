import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Greeting from './Greeting';
import Bio from './Bio';
import Projects from './Projects';
import Cats from './Cats';
import Footer from './Footer';

function App() {

  return (
    <div className="app">
      <Header />
      <Greeting />  
      {/* <Switch> */}
        {/* <Route exact path='/content'> */}
        <Bio /> 
        {/* </Route> */}
        <Projects />
        <Cats />
      {/* </Switch> */}
      <Footer />
    </div>
  );
}

export default App;

//こんにちは
// 你好