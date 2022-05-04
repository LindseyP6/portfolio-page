import React, {useEffect, useState, useCallback} from 'react';

function Greeting() {
    const [greeting, setGreeting] = useState();
  
    const hello = ['Hola!', 'Hello!', 'Bonjour!', 'Konnichiwa!', 'Nǐ  hǎo!', 'Namaste!', 'Shalom!', 'As-salaam  alykum!', 'Guten tag!', 'Zdravo!', 'Anyeong  Haseyo!']
  
  
    const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * hello.length);
      setGreeting(hello[index]);
  }, [hello]);
  
  useEffect(() => {
      const intervalID = setInterval(shuffle, 3000);
      return () => clearInterval(intervalID);
  }, [shuffle])
  
  return (
    <div id="greeting">
      <h4>{greeting} </h4> 
      <h1>I'm Lindsey Lee</h1>
      <p>Brooklyn, NY based Full-Stack Software Engineer.</p>
      <p>React.js | Ruby on Rails</p>
    </div>
  )
}

export default Greeting