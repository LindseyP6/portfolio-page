import React from 'react'

function Bio() {
  return (
    <div id="bio">
      <h1>About Me</h1>
        <div className="bioLeft">
          <p>Hi! I'm Lindsey and I am excited to be entering the wide world of coding. I'm a full stack engineer with an interest in UI and graphic design. I bring my passion for anti-racism, social justice and cat rescue to everything I do. 
          </p>
          <a href="https://www.linkedin.com/in/lindsey-lee-pregent1613/overlay/1635490062046/single-media-viewer/" target="_blank" rel="noreferrer">Resume</a>
        </div>
        <div className="bioRight">
          <img src="../Images/llp.jpeg" alt="selfie of girl with glasses and purple hair"/>
        </div>
        <div className="bio-bottom-tech-stack">
          <h2>Tech Stack</h2>
          <img src="https://storage.cloud.google.com/all-cats/Tech/react.svg" alt="css-icon"/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/rubyonrails.svg" alt="css-icon"/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/html5.svg" alt="css-icon"/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/css3.svg" alt="css-icon"/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/postman.svg" alt="css-icon"/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/postgresql.svg" alt="css-icon"/>
          <img src="https://storage.cloud.google.com/all-cats/Tech/github.svg" alt="css-icon"/>
        </div>
    </div>
  )
}

export default Bio