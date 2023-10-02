'use client';
import React from 'react'
import { Button } from 'flowbite-react';

const AddContactBtn = (props) => {
    const { actionFunction } = props;

    const handleClick = (event) => {
        event.preventDefault();
        actionFunction();
    }

    return (
        <Button onClick={(event) => handleClick(event)}>Ajouter</Button>
    )
}

export default AddContactBtn