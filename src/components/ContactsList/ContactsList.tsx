import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard/ContactCard';
import BtnAddContact from './CL-BtnAddContact/BtnAddContact';
import { getAllContacts } from '../../services/API/contacts';

const ContactsList = () => {
    //Récupérer la liste des contacts
    const [lengthIs0, setLengthIs0] = useState(false);
    const [contacts1, setContacts1] = useState();
    const [contacts2, setContacts2] = useState();
    
    useEffect(() => {
        const displayAllContacts = async() => {
            const response = await getAllContacts();
            const contactList = await response.data;
            const contactList1 = await contactList.allUserOne;
            const contactList2 = await contactList.allUserTwo;
            setContacts1(contactList1);
            setContacts2(contactList2);
            if(contacts1.length === 0 && contacts2.length === 0){
                setLengthIs0(true);
            }
        }
        displayAllContacts();  
    }, []);

    return (
        <div className='contactList sm:w-1/2 p-2'>
            <div className='contactList__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
            <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Mes contacts:</h3>
            <div className='flex flex-col justify-center items-center gap-5'>
                {contacts1 === undefined && contacts2 === undefined || !contacts1 && !contacts2 || lengthIs0 === true //length à revoir
                ? 
                    <p>Pas de contacts à afficher.</p>
                :
                    contacts1.map(contact => {
                        return(
                            <ContactCard key={contact.id} id={contact.id} otherUserId={contact.user2.user2_id} nickname={contact.user2.nickname} />
                        )
                    }) 
                }
                { contacts1 !== undefined && contacts2 !== undefined || contacts1 && contacts2 || lengthIs0 === true  //length à revoir
                ?
                    contacts2.map(contact => {
                        return(
                            <ContactCard key={contact.id} id={contact.id} otherUserId={contact.user1.user1_id} nickname={contact.user1.nickname} />
                        )
                    })
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