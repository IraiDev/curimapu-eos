import React from 'react'

export const DateInput = ({textConten}) => {
  return (
    <div className="mt-4">
      <label className="ml-2 text-sm">{textConten}</label>
      <input
        className="w-full px-3 py-2 mt-1 text-gray-400 border border-gray-300 rounded-lg"
        type="date" />
    </div>
  )
}
