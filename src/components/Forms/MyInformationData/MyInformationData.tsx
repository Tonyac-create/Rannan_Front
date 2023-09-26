'use client';
import React, { useState } from 'react';
import { Button, Checkbox, Label, Modal, Select, TextInput } from 'flowbite-react';

const MyInformationData = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const [email, setEmail] = useState("");
    const props = { openModal, setOpenModal, email, setEmail };
    return (
        <>
            <Button onClick={() => props.setOpenModal('form-elements')}>Action</Button>
            <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Action une donnée</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Nom" />
                        </div>
                        <TextInput id="name" placeholder="Nom de l'information" required />
                    </div>
                    <div>
                        <div className='mb-2 block'>
                            <Label htmlFor='type' value='Type:'/>
                        </div>
                        <Select id='type' required>
                            <option>Texte</option>
                            <option>Numéro</option>
                            <option>Email</option>
                            <option>URL</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="value" value="Contenu" />
                        </div>
                        <TextInput id="value" placeholder="Description de l'information" required />
                    </div>
                    
                    <div className="w-full">
                    <Button>Action</Button>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default MyInformationData