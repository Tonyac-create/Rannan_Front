import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard/ContactCard';
import BtnAddContact from './CL-BtnAddContact/BtnAddContact';
import { getAllContacts } from '../../services/API/contacts';

const ContactsList = () => {
    //Récupérer la liste des contacts
    const [length1Is0, setLength1Is0] = useState(true);
    const [length2Is0, setLengthI2s0] = useState(true);
    const [contacts1, setContacts1] = useState([]);
    const [contacts2, setContacts2] = useState([]);
    
    useEffect(() => {
        const displayAllContacts = async() => {
            const response = await getAllContacts();
            const contactList = await response.data;
            const contactList1 = await contactList.allUserOne;
            const contactList2 = await contactList.allUserTwo;
            console.log("🚀 ~ file: ContactsList.tsx:19 ~ displayAllContacts ~ contactList2:", contactList2)
            setContacts1(contactList1);
            setContacts2(contactList2);
            console.log("🚀 ~ file: ContactsList.tsx:22 ~ displayAllContacts ~ contacts2:", contacts2)
            if(contacts1.length !== 0){
                setLength1Is0(false);
            }
            if(contacts2.length !== 0){
                setLengthI2s0(false)
            }
        }
        displayAllContacts();
    }, []);

    return (
        <div className='contactList sm:w-1/2 p-2'>
            <div className='contactList__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
            <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Mes contacts:</h3>
            <div className='flex flex-col justify-center items-center gap-5'>
                {contacts1 === undefined  || !contacts1  || length1Is0 === true //length à revoir
                ? 
                    <div className='hidden'></div>
                :
                    contacts1.map(contact => {
                        return(
                            <ContactCard key={contact.id} id={contact.id} otherUserId={contact.user2.user2_id} nickname={contact.user2.nickname} />
                        )
                    }) 
                }
                { contacts2 === undefined || !contacts2 || length2Is0 === true  //length à revoir
                ?
                    contacts2.map(contact => {
                        return(
                            <ContactCard key={contact.id} id={contact.id} otherUserId={contact.user1.user1_id} nickname={contact.user1.nickname} />
                        )
                    })
                :
                    <div className='hidden'></div>
                }
                { length1Is0 === true && length2Is0 === true
                ?
                    <p>Pas de contacts à afficher.</p>
                :
                    <div className='hidden'></div>
                }
            </div>
            <BtnAddContact/>
            </div>
        </div>
    )
}

export default ContactsList