import React, {useEffect, useState, useCallback} from 'react';
import TechStack from './TechStack';

function Greeting() {
    const [greeting, setGreeting] = useState();
  
    const hello = ['Hola!', 'Hello!', 'Bonjour!', 'Konnichiwa!', 'Nǐ  hǎo!', 'Namaste!', 'Shalom!', 'As-salaam  alykum!', 'Guten tag!', 'Zdravo!', 'Anyeong  Haseyo!', `"Hello, World!"`]
  
  
    const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * hello.length);
      setGreeting(hello[index]);
  }, [hello]);
  
  useEffect(() => {
      const intervalID = setInterval(shuffle, 2000);
      return () => clearInterval(intervalID);
  }, [shuffle])
  
  return (
    <div id="greeting">
      <h4>{greeting} </h4> 
      <h1>I'm Lindsey Lee</h1>
      <p>Brooklyn, NY based Full Stack Software Engineer and Cat Rescuer. Just starting out in the world of coding and looking to launch my career.</p>
      <TechStack />
    </div>
  )
}

export default Greeting