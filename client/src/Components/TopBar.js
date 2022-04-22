import React from 'react'
import HeaderLinks from './NavLinks'
import Bio from './Bio'

function TopBar() {
  return (
    <div className="topBar">
        <Bio />
        <HeaderLinks />
    </div>
  )
}

export default TopBar