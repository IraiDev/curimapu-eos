import React from 'react'

export const TagValue = ({tag, textConten}) => {
  return (
    <div className="flex">
      <b className="mr-2 capitalize">{tag}</b>
      <p>{textConten}</p>
    </div>
  )
}
