import React from 'react'

export const NavBar = () => {

  return (
    <nav className="flex items-center justify-between h-16 px-10 text-gray-800 bg-gray-100 shadow-md">
      <div>
        <h5>Curimapu</h5>
      </div>
      <div className="flex items-center">
        <i className="mr-2 fas fa-satellite "></i>
        <h5>EOS</h5>
      </div>
    </nav>
  )
}
