import React, { useEffect, useState } from 'react'
import RequestInfo from './Requests/RequestInfo/Request'
import RequestForm from './Requests/RequestForm/RequestForm'
import { createContact, deleteValidation, getAllValidations } from '../../services/api/contacts'
import { Modal } from 'flowbite-react'
import { HiCheck, HiX } from 'react-icons/hi'

const ContactsInvitation = () => {
  const [recievedReq, setRecievedReq] = useState([]);
  const [sentReq, setSentReq] = useState([]);
  const [recievedIs0, setRecievedIs0 ] = useState(false);
  const [sentIs0, setSentIs0] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openAcceptModal, setOpenAcceptModal] = useState(false);

  //Afficher la liste des reuÊtes
  useEffect(() => {
    const displayAllValidations = async() => {
      const response = await getAllValidations();
      const validationsList = await response.data;
      const sentValidations = await validationsList.allSent;
      const recievedValidations = await validationsList.allRecieved;
      setSentReq(sentValidations);
      setRecievedReq(recievedValidations);
      if(sentReq.length === 0){
        setSentIs0(true);
      }
      if(recievedReq.length === 0){
        setRecievedIs0(true);
      }
    }
    displayAllValidations();
  }, [])

  //Gérer le refus des requêtes reçues
  const handleRefusal = async(e: Event) => {
    e.preventDefault();
    const target = (((e.currentTarget).parentNode).parentNode).parentNode;
    const target_id = target.id;
    console.log(target_id)
    await deleteValidation(target_id);
    setOpenModal(true);
  }

  const confirmRefusal = (e: Event) =>{
    e.preventDefault();
    setOpenModal(false);
    window.location.reload();
  }

  //Gérer accepter une requÊte reçue
  const handleAcceptRq = async(e: Event) => {
    e.preventDefault();
    const target = (((e.currentTarget).parentNode).parentNode).parentNode;
    const body = {otherUser_id : target.dataset.user, validation_id : target.id};
    console.log("🚀 ~ file: ContactsInvitation.tsx:59 ~ handleAcceptRq ~ body:", body)
    const response = await createContact(body);
    console.log("🚀 ~ file: ContactsInvitation.tsx:60 ~ handleAcceptRq ~ response:", response)
    setOpenAcceptModal(true)
  }

  const confirmAccept = (e: Event) =>{
    e.preventDefault();
    setOpenAcceptModal(false);
    window.location.reload();
  }

  return (
    <div className='contactsInvitation sm:w-1/2 flex flex-col gap-6'>
        {/* RequÊtes envoyées */}
        <div className='sentRequests myInformations__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
          <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Requêtes envoyées:</h3>
          <div className='sentRequestsList flex flex-col gap-2'>
            { sentReq !== undefined || sentReq !== null || sentIs0 === false
              ?
                sentReq.map(validation => {
                  return(
                    <RequestInfo key={validation.id} id={validation.id} nickname={validation.contact.nickname} />
                  )
                })
              :
                <p>Pas de requêtes envoyées à afficher.</p>
            }
          </div>
        </div>

        {/* RequÊtes reçues */}
        <div className='recievedRequests myInformations__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
          <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Requêtes reçues:</h3>
          <div className='recievedRequestsList flex flex-col gap-2'>
            { recievedReq !== undefined || recievedReq !== null || recievedIs0 === false 
              ?
                recievedReq.map(validation => {
                  return(
                    <RequestForm key={validation.id} id={validation.id} nickname={validation.user.nickname} dataTarget={validation.user.user_id} handleRefuse={handleRefusal} handleAccept={handleAcceptRq}/>
                  )
                })
              :
                <p>Pas de requêtes reçues à afficher.</p>
            }
            <Modal show={openModal} size="md" onClose={confirmRefusal} popup>
              <Modal.Header />
              <Modal.Body>
                <div className="text-center">
                  <HiX className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Demande refusée
                  </h3>
                </div>
              </Modal.Body>
            </Modal>
            <Modal show={openAcceptModal} size="md" onClose={confirmAccept} popup>
              <Modal.Header />
              <Modal.Body>
                <div className="text-center">
                  <HiCheck className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Demande acceptée
                  </h3>
                </div>
              </Modal.Body>
            </Modal>
            
          </div>
        </div>
      
    </div>
  )
}

export default ContactsInvitation