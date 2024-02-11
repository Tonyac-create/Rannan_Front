import { useEffect, useState } from 'react'
import RequestInfo from './Requests/RequestInfo/Request'
import RequestForm from './Requests/RequestForm/RequestForm'
import { createContact, deleteValidation, getAllValidations } from '../../services/api/contacts'
import { Modal } from 'flowbite-react'
import { HiCheck, HiX } from 'react-icons/hi'

const ContactsInvitation = () => {
  const [recievedReq, setRecievedReq] = useState([]);
  const [sentReq, setSentReq] = useState([]);
  const [recievedIs0, setRecievedIs0 ] = useState(true);
  const [sentIs0, setSentIs0] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openAcceptModal, setOpenAcceptModal] = useState(false);

  //Afficher la liste des requêtes
  useEffect(() => {
    const displayAllValidations = async() => {
      const response = await getAllValidations();
      const validationsList = await response.data;
      if(validationsList){
        const sentValidations = await validationsList.allSent;
        if(sentValidations){
          setSentReq(sentValidations);
        }
        const recievedValidations = await validationsList.allRecieved;
        if(recievedValidations){
          setRecievedReq(recievedValidations);
        }
      }
    }
    displayAllValidations();
  }, [])

  //Gérer affichage pour lsite vide [sentReq, recievedReq]) tableau de dependance
  useEffect(() => {
    const emptyRequest = () =>{
      if(sentReq.length !== 0){
        setSentIs0(false);
      }
      if(recievedReq.length !== 0){
        setRecievedIs0(false);
      }
    }
    emptyRequest();
  }, [sentReq, recievedReq])

  //Gérer le refus des requêtes reçues
  const handleRefusal = async(e: Event) => {
    e.preventDefault();
    const target = (((e.currentTarget).parentNode).parentNode).parentNode; //! typage+".parentNode" n'existe pas dans EventTarget
    const target_id = target.id;
    console.log(target_id)
    await deleteValidation(target_id);
    setOpenModal(true);
  }

  const confirmRefusal = (e: Event) =>{
    e.preventDefault();
    setOpenModal(false);
    console.log(openModal)
    window.location.reload();
  }

  //Gérer accepter une requÊte reçue
  const handleAcceptRq = async(e: Event) => {
    e.preventDefault();
    const target = (((e.currentTarget).parentNode).parentNode).parentNode; //! typage+".parentNode" n'existe pas dans EventTarget
    const body = {otherUser_id : target.dataset.user, validation_id : target.id};
    console.log("🚀 ~ file: ContactsInvitation.tsx:69 ~ handleAcceptRq ~ body:", body)
    const response = await createContact(body);
    console.log("🚀 ~ file: ContactsInvitation.tsx:71 ~ handleAcceptRq ~ response:", response)
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
            { sentReq === undefined || sentReq === null || sentIs0 === true
              ?
              <p>Pas de requêtes envoyées à afficher.</p>
              :
              sentReq.map((validation: any) => {
                return(
                  <RequestInfo key={validation.id} id={validation.id} nickname={validation.contact.nickname} />
                )
              })
            }
          </div>
        </div>

        {/* RequÊtes reçues */}
        <div className='recievedRequests myInformations__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
          <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Requêtes reçues:</h3>
          <div className='recievedRequestsList flex flex-col gap-2'>
            { recievedReq === undefined || recievedReq === null || recievedIs0 === true
              ?
              <p>Pas de requêtes reçues à afficher.</p>
              :
                recievedReq.map((validation: any) => {
                  return(
                    <RequestForm key={validation.id} id={validation.id} nickname={validation.user.nickname} dataTarget={validation.user.user_id} handleRefuse={handleRefusal} handleAccept={handleAcceptRq}/>
                  )
                })
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