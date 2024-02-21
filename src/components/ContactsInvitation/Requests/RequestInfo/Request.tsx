'use client';
import { Alert, Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import DeleteModal from './DeleteModal/DeleteModal';
import { deleteValidation } from '../../../../services/api/contacts';

const RequestInfo = (props: { id: string; nickname: string; }) => {
  const { id, nickname } = props;
  const [openModal, setOpenModal] = useState(false);
  const [ targetId, setTargetId ] = useState('');
  const [isDeleted, setIsDeleted] = useState(false)

  const openDeleteModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = (e.currentTarget as HTMLElement).closest('.alert')
    if (target) {
      const target_id = target.id
      setTargetId(target_id);
      setOpenModal(true);
  } else {
      console.error('Target not found');
  }
  }

  const handleDelete = async(e: Event) => {
    e.preventDefault();
    await deleteValidation(targetId)
    setIsDeleted(true)
    setOpenModal(false)
  }

  return (
    !isDeleted && 
    <Alert className='alert' color="warning" withBorderAccent id={id}>
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
              <Button color="failure" size="xs" onClick={(e) => openDeleteModal(e)}>Supprimer</Button>
              <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <DeleteModal  deleteRequest={handleDelete} closeModal={() => {
                  setOpenModal(false)
                  
                  }
                  }/>
              </Modal>
            </span>    
        </p>
    </Alert>
  )
}

export default RequestInfo