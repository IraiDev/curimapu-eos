import React from 'react'
import { NavBar } from './components/navbar/NavBar'
import { Table } from './components/tables/Table'

export const App = () => {
  return (
    <> 
      <NavBar/>

      <div className="container mx-auto">
        <Table/>
      </div>
    </>
  )
}