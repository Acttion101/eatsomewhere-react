import React from 'react'

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">Logo</div>
      <div className="navbar-input">
        <span>username : </span>
        <input></input>
        <span>password : </span>
        <input></input>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
