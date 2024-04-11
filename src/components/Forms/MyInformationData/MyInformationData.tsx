'use client';
import { useState } from 'react';
import { Button, Textarea, Label, Select, TextInput } from 'flowbite-react';

const MyInformationData = (props: any) => {

    const { action, title, actionData, name, value, setOpenModal } = props
    const [newData, setNewData] = useState({ type: "text", name: name, value: value })

    // Fonction pour les champs
    const handleChange = (event: any) => {
        // Récupération de la valeur du champ name et value
        const { name, value } = event.target
        setNewData({ ...newData, [name]: value })
    }
    
    // soumission du formulaire pour la création de la data
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        actionData(newData)
    }

    return (
        <form className="space-y-6" title={title} onSubmit={(event) => handleSubmit(event)}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{action} une donnée</h3>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Nom *" />
                </div>
                <TextInput
                    required
                    id="name"
                    placeholder="Nom de l'information"
                    onChange={(event) => handleChange(event)}
                    name="name"
                    defaultValue={name} />
            </div>
            <div>
                <div className='mb-2 block'>
                    <Label htmlFor='type' value='Type:' />
                </div>
                <Select
                    id='type'
                    onChange={(event) => handleChange(event)}
                    name="type" >
                    <option value="">Sélectionner un type</option>
                    <option value='text'>Texte</option>
                    <option value='number'>Numéro</option>
                    <option value='mail'>Email</option>
                    <option value='url'>URL</option>
                </Select>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="value" value="Contenu *" />
                </div>
                <Textarea
                    required
                    id="value"
                    placeholder="Description de l'information"
                    onChange={(event) => handleChange(event)}
                    name="value"
                    defaultValue={value} />
            </div>

            <div className="flex w-full">
                <Button type='submit'>{action}</Button>
                <Button color='failure' className='ml-2' onClick={() => setOpenModal(undefined)}>Annuler</Button>
            </div>
        </form>
    )
}

export default MyInformationData