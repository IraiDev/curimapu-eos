import React, { useContext } from 'react'
import { UiContext } from '../../context/UiController';
import { TableContent } from './TableContent';
import { DateInput } from '../ui/DateInput';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { TableTh } from './TableTh';

export const Table = () => {
  const {setShowModal, showModal} = useContext(UiContext)
  
  return (
    <div className="w-2/3 mx-auto">
      <div className="my-6 bg-white rounded-md shadow-md">
        <table className="w-full text-left border-collapse"> 
          <thead className="bg-gray-100 rounded-md">
            <tr>
              <TableTh value="ID"/>
              <TableTh value="Grupo"/>
              <TableTh value="Tipo"/>
              <TableTh value="Area"/>
              <TableTh value="Detalle"/>
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

      <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
            Formulario detalle
        </ModalHeader>
        <ModalBody>
          <div className="w-500">
            <Input
              type="text"
              color="blueGray"
              size="regular"
              outline={true}
              placeholder="Tamaño imagen (1 -10)"
            />
            <DateInput value="Fecha desde:"/>
            <DateInput value="Fecha desde:"/>
          </div>
        </ModalBody>
        <ModalFooter>
            <Button 
                color="red"
                buttonType="link"
                onClick={(e) => setShowModal(false)}
                ripple="dark"
            >
                Cancelar
            </Button>

            <Button
                color="green"
                onClick={(e) => setShowModal(false)}
                ripple="light"
            >
                Ver detalle
            </Button>
        </ModalFooter>
    </Modal>
    </div>
  )
}
