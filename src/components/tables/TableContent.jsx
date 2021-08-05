import React, { useContext } from 'react'
import { UiContext } from '../../context/UiController'

export const TableContent = () => {
  const {setShowModal} = useContext(UiContext)

  return (
    <>
      <tr className="hover:bg-grey-lighter">
        <td className="px-6 py-4 lowercase border-b border-grey-light">1234567890123</td>
        <td className="px-6 py-4 lowercase border-b border-grey-light">ARVEJA</td>
        <td className="px-6 py-4 lowercase border-b border-grey-light">conjunto</td>
        <td className="px-6 py-4 lowercase border-b border-grey-light">0.998792347798</td>
        <td className="px-6 py-4 lowercase border-b border-grey-light">
          <button 
            className="text-blue-500 active:outline-none focus:outline-none hover:text-blue-800"
            onClick={() => setShowModal(true)}
             >
            ver detalle
          </button>
        </td>
      </tr>
    </>
  )
}
