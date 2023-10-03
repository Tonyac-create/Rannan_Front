import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard/ContactCard';
import BtnAddContact from './CL-BtnAddContact/BtnAddContact';

const ContactsList = () => {
    const datas = [
        {
            id: 1,
            user1Id: 1,
            user2Id: 2,
            nickname: "Papo",
        },
        {
            id: 2,
            user1Id: 1,
            user2Id: 3,
            nickname: "Miguel",
        }
    ];
    //Récupérer la liste des contacts
    const [contacts, setContacts] = useState();

    useEffect(() => {
        const displayAllContacts = () => {
            //Récupérer service API getAllContacts  (à faire)
            setContacts(datas);
        }
        displayAllContacts();
    }, []);

    return (
        <div className='contactList sm:w-1/2 p-2'>
            <div className='contactList__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
            <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Mes contacts:</h2>
            <div className='flex flex-col justify-center items-center gap-5'>
                {datas.map(data => {
                    return(
                        <ContactCard id={data.id} user2Id={data.user2Id} nickname={data.nickname} />
                    )
                })}
            </div>
            <BtnAddContact/>
            </div>
        </div>
    )
}

export default ContactsList