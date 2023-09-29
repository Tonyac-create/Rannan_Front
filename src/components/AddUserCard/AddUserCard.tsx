'use client';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'flowbite-react';
import AddContactBtn from '../ContactsList/CL-ModalAddContact/CL-MADC-Boutons/AddContactBtn';
import IsContactAlert from '../ContactsList/CL-ModalAddContact/CL-MADC-Alerts/isContactAlert/isContactAlert';
import RequestReccievedAlert from '../ContactsList/CL-ModalAddContact/CL-MADC-Alerts/requestRecievedAlert/RequestRecievedAlert';
import RequestSentAlert from '../ContactsList/CL-ModalAddContact/CL-MADC-Alerts/requestSentAlert/RequestSentAlert';

const AddUserCard = (props) => {
    const { nickname, id, addContactAction, status } = props;

    const [isBouton, setIsBouton] = useState();
    useEffect(() => {
      if (status === 1){
        setIsBouton(true)
      }
    }, []);

    const [isAlert1, setIsAlert1] = useState();
    useEffect(() => {
      if (status === 2){
        setIsAlert1(true)
      }
    });

    const [isAlert2, setIsAlert2] = useState();
    useEffect(() => {
      if (status === 3){
        setIsAlert2(true)
      }
    });

    const [isAlert3, setIsAlert3] = useState();
    useEffect(() => {
      if (status === 4){
        setIsAlert3(true)
      }
    });


  return (
    <Card className="addUserCard max-w-sm" key={id}>
      <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{nickname}</h4>
      <div className={`${isBouton ? "actionbtn" : "hidden"}`}>
        <AddContactBtn actionFunction={addContactAction} />
      </div>
      <div className={`${isAlert1 ? "alert" : "hidden"}`}>
        <IsContactAlert/>
      </div>
      <div className={`${isAlert2 ? "alert" : "hidden"}`}>
        <RequestReccievedAlert/>
      </div>
      <div className={`${isAlert3 ? "alert" : "hidden"}`}>
        <RequestSentAlert />
      </div>
    </Card>
  )
}

export default AddUserCard