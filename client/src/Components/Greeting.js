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
      <p>Brooklyn, NY based cat rescuer launching a career as a Full-Stack Software Engineer.</p>
      <div className="tech"> 
      <img src="https://storage.cloud.google.com/all-cats/Tech/react.svg" alt="react-icon" style={{backgroundColor: "#61DAFB"}}/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/rubyonrails.svg" alt="ruby-on-rails-icon" style={{backgroundColor: "#CC0000"}}/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/html5.svg" alt="html5-icon" style={{backgroundColor: "#E34F26"}}/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/css3.svg" alt="css3-icon" style={{backgroundColor: "#1572B6"}}/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/postman.svg" alt="postman-icon" style={{backgroundColor: "#FF6C37"}}/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/postgresql.svg" alt="postgresSQL-icon" style={{backgroundColor: "#4169E1"}}/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/github.svg" alt="github-icon" style={{backgroundColor: "#181717", color: "white"}}/>
          <img src="https://storage.cloud.google.com/all-cats/mapbox.svg" alt="mapbox-icon" style={{backgroundColor: "white"}}/>
      </div>
    </div>
  )
}

export default Greeting