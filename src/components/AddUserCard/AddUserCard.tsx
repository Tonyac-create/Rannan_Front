'use client';
import React from 'react'
import { Button, Card } from 'flowbite-react';
import AddContactBtn from '../ContactsList/CL-ModalAddContact/CL-MADC-Boutons/AddContactBtn';
import IsContactAlert from '../ContactsList/CL-ModalAddContact/CL-MADC-Alerts/isContactAlert/isContactAlert';
import RequestReccievedAlert from '../ContactsList/CL-ModalAddContact/CL-MADC-Alerts/requestRecievedAlert/RequestRecievedAlert';
import RequestSentAlert from '../ContactsList/CL-ModalAddContact/CL-MADC-Alerts/requestSentAlert/RequestSentAlert';

const AddUserCard = (props) => {
    const { nickname, id } = props;

    //prop pour l'´´element soit bouton ou alerte

  return (
    <Card className="addUserCard max-w-sm" key={id}>
      <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{nickname}</h4>
      {/* <AddContactBtn actionFunction={addContactAction} /> */}
      {/* <IsContactAlert/> */}
      {/* <RequestReccievedAlert/> */}
      <RequestSentAlert />
    </Card>
  )
}

export default AddUserCard