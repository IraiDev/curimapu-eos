import React from 'react'
import navLogo from '../../assets/logo/navLogo.png'

export const NavBar = () => {

  return (
    <nav className="flex items-center justify-between h-16 px-10 text-gray-800 bg-gray-100 shadow-md">
      <div>
        <img src={navLogo} alt="logo" />
      </div>
      <div className="flex items-center">
        <i className="mr-2 fas fa-satellite "></i>
        <h5>EOS</h5>
      </div>
    </nav>
  )
}
