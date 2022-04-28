import React from 'react'

function Bio() {
  return (
    <div id="bio">
      <h1>About Me</h1>
        <div className="bioLeft">
          {/* <h2>Cat Rescuer.</h2> */}
          <p>Hi! I'm Lindsey and I am excited to be entering the wide world of coding. I'm a full stack engineer with an interested in UI and graphic design.
          </p>
        </div>
        <div className="bioRight">
          <img src="https://live.staticflickr.com/65535/52034969779_27a1819248_z.jpg" alt="selfie of girl with glasses and purple hair"/>
        </div>
    </div>
  )
}

export default Bio