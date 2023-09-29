'use client';
import React from 'react';
import { Card } from 'flowbite-react';

const ContactCard = (props) => {
    const { id, user2Id, nickname } = props;

    return (
        <Card className='max-w-sm' href={`/profile/${user2Id}`} key={id} >
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nickname}</h3>
        </Card>
    )
}

export default ContactCard