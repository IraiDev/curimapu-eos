import React, { useContext, useState } from 'react'
import { UiContext } from '../../context/UiController';
import { TableTh } from './TableTh';
import { TableContent } from './TableContent';
import { TagValue } from '../ui/TagValue';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { useForm } from '../../hooks/useForm';

export const Table = () => {
  const {setShowModal, showModal, setShowModalDetails, showModalDetails} = useContext(UiContext)
  const [textError, setTextError] = useState("")
  const [inputValues, onChangeValues, reset] = useForm({
    inputPx: "",
    dateTo: "",
    dateFrom: ""
  })
  const {inputPx, dateFrom, dateTo} = inputValues

  const fieldValidator = (field1, field2, field3) => {
    if (field1 !== "" && field2 !== "" && field3 !== "") {
      setShowModal(false)
      setShowModalDetails(true)
      setTextError("")
      reset()
      return true
    }else{
      setTextError("llene los campos")
      return false
    }
  }
  
  return (

    // tabla grupo

    <div className="w-2/3 mx-auto">
      <div className="my-6 bg-white rounded-md shadow-md">
        <table className="w-full text-left border-collapse"> 
          <thead className="bg-gray-100 rounded-md">
            <tr>
              <TableTh textConten="ID"/>
              <TableTh textConten="Grupo"/>
              <TableTh textConten="Tipo"/>
              <TableTh textConten="Area"/>
              <TableTh textConten="Detalle"/>
            </tr>
          </thead>
          <tbody>
            <TableContent/>
            <TableContent/>
            <TableContent/>
            <TableContent/>
            <TableContent/>
          </tbody>
        </table>
      </div>

      {/* modal formulario detalle */}
      
      <Modal 
        size="regular" 
        active={showModal} 
        toggler={() =>{ 
          reset()
          setTextError("")
          setShowModal(false)
          }}>
        <ModalHeader 
          toggler={() =>{ 
            reset()
            setTextError("")
            setShowModal(false)
            }}>
            Formulario detalle
        </ModalHeader>
        <ModalBody>
          <div className="w-500">
            <Input
              name="inputPx"
              value={inputPx}
              onChange={onChangeValues}
              type="number"
              color="blueGray"
              size="regular"
              outline={true}
              placeholder="Tamaño imagen (1 -10)"
              error={textError}
            />
            <br />
            <Input
              name="dateFrom"
              value={dateFrom}
              onChange={onChangeValues}
              type="date"
              color="blueGray"
              size="regular"
              outline={true}
              placeholder="Fecha desde"
              error={textError}
            />
            <br />
            <Input
              name="dateTo"
              value={dateTo}
              onChange={onChangeValues}
              type="date"
              color="blueGray"
              size="regular"
              outline={true}
              placeholder="Fecha hasta"
              error={textError}
            />
          </div>
        </ModalBody>
        <ModalFooter>
            <Button 
                color="red"
                buttonType="link"
                onClick={() =>{ 
                  reset()
                  setTextError("")
                  setShowModal(false)
                  }}
                ripple="dark"
            >
                Cancelar
            </Button>

            <Button
                color="green"
                onClick={() => {
                  fieldValidator(inputPx, dateFrom, dateTo)
                }}
                ripple="light"
            >
                Ver detalle
            </Button>
        </ModalFooter>
    </Modal>

    {/* modal ver detalle */}

    <Modal size="regular" active={showModalDetails} toggler={() => setShowModalDetails(false)}>
        <ModalHeader toggler={() => setShowModalDetails(false)}>
          {"Detalle Arveja:"}
        </ModalHeader>
        <ModalBody>
          <div className="w-500">
            <TagValue tag="ID: " textConten="1234567890123"/>
            <TagValue tag="Satelite: " textConten="landsat8"/>
            <TagValue tag="elevacion del sol: " textConten="27.321"/>
            <TagValue tag="cobertura de nubes: " textConten="87.9984 %"/>
            <TagValue tag="fecha ultimo registro: " textConten="27-07-2021"/>
          </div>
        </ModalBody>
        <ModalFooter>
            <Button 
                color="red"
                buttonType="link"
                onClick={() => {
                  reset()
                  setTextError("")
                  setShowModalDetails(false)
                  }}
                ripple="dark"
            >
                Cerrar
            </Button>

            {/* <Button
                color="green"
                onClick={() => setShowModalDetails(false)}
                ripple="light"
            >
                Ver detalle
            </Button> */}
        </ModalFooter>
    </Modal>
    </div>
  )
}
