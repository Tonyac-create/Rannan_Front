import React from 'react';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const DeleteModal = (props: {closeModal: any; deleteRequest: any;}) => {
    const {closeModal, deleteRequest} = props;
    return (
        <>
            <Modal.Header />
                <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Voulez vous supprimer cette demande?
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button color="failure" onClick={deleteRequest}>
                            Oui
                        </Button>
                        <Button color="gray" onClick={closeModal}>
                            Non
                        </Button>
                    </div>
                </div>
                </Modal.Body>
        </>
    )
}
export default DeleteModal
