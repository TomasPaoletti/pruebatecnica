import React, { useState } from 'react';
import { Button, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import "./Modals.css"

function ModalDeposit() {

    const { modalDeposit, handleCloseModalDeposit, getCredit, modalId } = useAuth();
    const [price, setPrice] = useState({
        "montoInicial": ""
    })

    const priceChange = ({ target: { name, value } }) => {
        setPrice(currentValue => ({
            ...currentValue,
            [name]: value
        }))
    };

    const handleDeposit = async () => {
        await getCredit(price.montoInicial, modalId)
        handleCloseModalDeposit()
        setPrice({
            "montoInicial": ""
        })
    }

    return (
        <Modal show={modalDeposit}>
            <ModalHeader>
                <ModalTitle>
                    Acreditar dinero
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <FormControl
                    type='number'
                    name="montoInicial"
                    value={price.montoInicial}
                    onChange={priceChange}
                    min="0" />
            </ModalBody>
            <ModalFooter>
                <Button variant='primary' onClick={handleDeposit}>Acreditar</Button>
                <Button variant='secondary' onClick={handleCloseModalDeposit}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalDeposit