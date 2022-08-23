import React from 'react';
import Greeting from './Greeting';
import Bio from './Bio';
import TechStack from './TechStack';

function HomePage() {
  return (
    <div id="home-page">
        <Greeting />  
        <Bio /> 
        <TechStack />
    </div>
  )
}

export default HomePage