'use client';
import { Alert, Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import DeleteModal from './DeleteModal/DeleteModal';
import { deleteValidation } from '../../../../services/api/contacts';

const RequestInfo = (props: { id: string; nickname: string; }) => {
  const { id, nickname } = props;
  const [openModal, setOpenModal] = useState(false);
  const [ targetId, setTargetId ] = useState();

  const openDeleteModal = (e: Event) => {
    const target = (((((e.currentTarget).parentNode).parentNode).parentNode).parentNode).parentNode;
    const target_id = target.id;
    console.log(target_id);
    setTargetId(target_id);
    setOpenModal(true)
  }

  const handleDelete = async(e: Event) => {
    e.preventDefault();
    await deleteValidation(targetId);
    setOpenModal(false);
    window.location.reload();
  }

  return (
    <Alert color="warning" withBorderAccent id={id}>
        <p className='flex flex-row justify-evenly content-center gap-3'>
            <span className='flex flex-row gap-1'>
                <span>User:</span>
                <span>{nickname}</span>
            </span>
            <span className='flex flex-row gap-1'>
                <span>Statut:</span>
                <span>En attente</span>
            </span>
            <span className='flex flex-row gap-1'>
              <Button color="failure" size="xs" onClick={openDeleteModal}>Supprimer</Button>
              <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <DeleteModal  deleteRequest={handleDelete} closeModal={() => setOpenModal(false)}/>
              </Modal>
            </span>    
        </p>
    </Alert>
  )
}

export default RequestInfo