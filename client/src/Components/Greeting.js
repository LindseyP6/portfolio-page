import React, {useEffect, useState, useCallback} from 'react';

function Greeting() {
    const [greeting, setGreeting] = useState();
  
    const hello = ['Hola!', 'Hello!', 'Bonjour!', 'Konnichiwa!', 'Nǐ  hǎo!', 'Namaste!', 'Shalom!', 'As-salaam  alykum!']
  
  
    const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * hello.length);
      setGreeting(hello[index]);
  }, [] );
  
  useEffect(() => {
      const intervalID = setInterval(shuffle, 3000);
      return () => clearInterval(intervalID);
  }, [shuffle])
  return (
    <div className="greeting">
        <p>{greeting} </p> 
        <h1>I'm Lindsey Lee</h1>
    </div>
  )
}

export default Greeting