import React, {useEffect, useState, useCallback} from 'react';
import '../App.css';
import TopBar from './TopBar'
import Projects from './Projects'

function App() {
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
    <div className="App">
      <div className="header">
        <p>{greeting} </p> 
        <h1>I'm Lindsey Lee</h1>
      </div>
      <TopBar />
      <div className="project">
        {/* <Projects /> */}
      </div>
    </div>
  );
}

export default App;

//こんにちは
// 你好