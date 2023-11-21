'use client';
import React, { useState } from 'react';
import { Modal } from 'flowbite-react';
import { HiCheck, HiX } from 'react-icons/hi';
import { createValidation } from '../../../../services/api/contacts';
import AddUserCard from '../../../AddUserCard/AddUserCard';

export const SearchUserContacts = (props) => {
    const {usersFound} = props;

    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [requestIsSent, setRequestIsSent] = useState(false);

    //Gérer l'envoi d'une validation
    const sendValidation = async(e: Event) => {
        e.preventDefault();
        const target = ((e.currentTarget).parentNode).parentNode;
        //RequÊte axios
        const response = await createValidation({contactId : target.id});
        //En fonction de la réponse définir un message ou un autre pour le modal
        if(response.status === 200){
          setRequestIsSent(true);
          setOpenConfirmModal(true);
        }
        else{
          setOpenConfirmModal(true);
        }      
    }

    //Gerer la modale notification
    const confirmAccept = (e: Event) =>{
        e.preventDefault();
        setOpenConfirmModal(false);
        window.location.reload();
    }

    return (
        <div>
            <div className='userList'>
            {usersFound.map((item) => (
                <AddUserCard key={item.id} id={item.id} nickname={item.nickname} status={item.status} action={sendValidation} />   
            ))}
            </div>
            <div>
              <Modal show={openConfirmModal} size="md" onClose={confirmAccept} popup className={requestIsSent === true ? "modal" : "hidden"}>
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiCheck className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Demande envoyée
                    </h3>
                  </div>
                </Modal.Body>
              </Modal>
              <Modal show={openConfirmModal} size="md" onClose={confirmAccept} popup className={requestIsSent === false ? "modal" : "hidden"}>
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiX className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Erreur dans l'envoi de la demande.
                    </h3>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
        </div>
    )
}
export default SearchUserContacts