'use client';
import React, { useState } from 'react';
import { Button, Textarea, Label, Select, TextInput } from 'flowbite-react';

const MyInformationData = (props) => {

    const { action, title, actionData, name, value } = props;
    
    const [newData, setNewData] = useState({
        name: "",
        type:"",
        value: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewData({...newData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        actionData(newData);
        setNewData({name:"", type:"", value:""})
    }
    
    return (
        <form className="space-y-6" title={title} onSubmit={(event) => handleSubmit(event)}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{action} une donnée</h3>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Nom" />
                </div>
                <TextInput id="name" placeholder="Nom de l'information" required onChange={(event) => handleChange(event)} defaultValue={name} />
            </div>
            <div>
                <div className='mb-2 block'>
                    <Label htmlFor='type' value='Type:'/>
                </div>
                <Select id='type' required onChange={(event) => handleChange(event)}>
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
                <Textarea id="value" placeholder="Description de l'information" required onChange={(event) => handleChange(event)} defaultValue={value} />
            </div>
            
            <div className="w-full">
            <Button>{action}</Button>
            </div>
        </form>
    )
}

export default MyInformationData