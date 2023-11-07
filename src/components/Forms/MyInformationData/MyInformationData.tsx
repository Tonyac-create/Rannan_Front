'use client';
import React, { useState } from 'react';
import { Button, Textarea, Label, Select, TextInput } from 'flowbite-react';
import { createData, updateData } from '../../../services/api/data';
import { useParams } from 'react-router-dom';

const MyInformationData = (props: any) => {

    const { action, title, actionData, type, name, value } = props;

    const [newData, setNewData] = useState({});

    const handleChange = (event: any) => {
        // Récupération de la valeur du champ name et value
        const { name, value } = event.target;
        setNewData({ ...newData, [name]: value })
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        actionData(newData)
    }

    return (
        <form className="space-y-6" title={title} onSubmit={(event) => handleSubmit(event)}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{action} une donnée</h3>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Nom" />
                </div>
                <TextInput id="name" placeholder="Nom de l'information" required onChange={(event) => handleChange(event)} name="name" defaultValue={name} />

            </div>
            <div>
                <div className='mb-2 block'>
                    <Label htmlFor='type' value='Type:' />
                </div>
                <Select id='type' required onChange={(event) => handleChange(event)} name="type" defaultValue={type} >
                    <option value='text'>Texte</option>
                    <option value='number'>Numéro</option>
                    <option value='mail'>Email</option>
                    <option value='url'>URL</option>
                </Select>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="value" value="Contenu" />
                </div>
                <Textarea id="value" placeholder="Description de l'information" required onChange={(event) => handleChange(event)} name="value" defaultValue={value} />

            </div>

            <div className="w-full">
                <Button type='submit'>{action}</Button>
            </div>
        </form>
    )
}

export default MyInformationData