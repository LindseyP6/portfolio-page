import React from 'react'

function Bio() {
  return (
    <div id="bio">
      <h1>About Me</h1>
        <div className="bioLeft">
          <p>Hi! I'm Lindsey and I am excited to be entering the wide world of coding. After working in customer service and administration for 15 years, I decided on a change. I'm now a Full Stack Software Engineer. I bring my passion for anti-racism, social justice and cat rescue to everything I do. 
          </p>
          <a href="https://www.linkedin.com/in/lindsey-lee-pregent1613/overlay/1635490062046/single-media-viewer/" target="_blank" rel="noreferrer">Resume</a>
        </div>
        <div className="bioRight">
          <img src="../Images/llp.jpeg" alt="selfie of girl with glasses and purple hair"/>
        </div>
    </div>
  )
}

export default Bio