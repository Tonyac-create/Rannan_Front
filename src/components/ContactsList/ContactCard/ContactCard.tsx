'use client';
import { Card } from 'flowbite-react';

const ContactCard = (props: any) => {
    const { id, otherUserId, nickname } = props;

    return (
        <Card className='w-2/3' href={`/profile/${otherUserId}`} id={id} >
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{nickname}</h4>
        </Card>
    )
}

export default ContactCard