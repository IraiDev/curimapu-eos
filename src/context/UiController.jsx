import React, { useState } from 'react'

export const UiContext = React.createContext();

export const UiController = ({children}) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalDetails, setShowModalDetails] = useState(false);

  const UiValues = {
    showModal,
    setShowModal,
    showModalDetails,
    setShowModalDetails
  }
  
  return (
    <UiContext.Provider value={UiValues}>
      {children}
    </UiContext.Provider>
  )
}