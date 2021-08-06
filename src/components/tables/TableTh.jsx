import React from 'react'

export const TableTh = ({textConten}) => {
  return (
    <th 
      className="px-6 py-4 text-sm font-bold uppercase border-b bg-grey-lightest text-grey-dark border-grey-light">
      {textConten}
    </th>
  )
}
