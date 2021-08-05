import React from 'react'

export const TagValue = ({tag, value}) => {
  return (
    <div className="flex">
      <b className="mr-2">{tag}</b>
      <p>{value}</p>
    </div>
  )
}
