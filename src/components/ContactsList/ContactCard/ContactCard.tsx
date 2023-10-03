'use client';
import React from 'react';
import { Card } from 'flowbite-react';

const ContactCard = (props) => {
    const { id, user2Id, nickname } = props;

    return (
        <Card className='w-2/3' href={`/profile/${user2Id}`} key={id} >
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{nickname}</h4>
        </Card>
    )
}

export default ContactCard