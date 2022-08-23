import React, {useEffect, useState, useCallback} from 'react';

function Greeting() {
    const [greeting, setGreeting] = useState();
  
    const hello = ['Hola!', 'Hello!', 'Bonjour!', 'Konnichiwa!', 'Nǐ  hǎo!', 'Shalom!', 'As-salaam  alykum!', 'Guten tag!', 'Zdravo!', 'Anyeong  Haseyo!', `"Hello, World!"`, 'yo!', 'Hello!', 'Greetings!']
  
  
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
      <div className="home-page-greeting">
        <br></br>
        <br></br>
        <h4>{greeting} </h4> 
        <h1>I'm Lindsey Lee</h1>
        <p style={{fontWeight: "bold"}}>Brooklyn, NY based Software Engineer, Cat Rescuer and People Person. </p> 
        <p style={{width: "80%", fontSize: "1.1em"}}>For 15 years, I worked in Customer Service and Administration before transitioning to tech. In 2022, I attended Flatiron School am now a Full Stack Software Engineer! I also work in the cat rescue world am passionate about anti-racism, social justice and mental health.</p>
      </div> 
      <div className="home-page-selfie">
        <img src="../Images/llp.jpeg" alt="selfie of me with glasses and purple hair"/>
      </div>
    </div>
  )
}

export default Greeting