import React from 'react'
import ContactsList from '../../components/ContactsList/ContactsList'
import ContactsInvitation from '../../components/ContactsInvitation/ContactsInvitation'

const Contacts = () => {
  return (
    <div className='flex flex-row'>
      <ContactsList />
      <ContactsInvitation />
    </div>
  )
}

export default Contacts