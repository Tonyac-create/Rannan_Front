import React from 'react'
import ContactsList from '../../components/ContactsList/ContactsList'
import ContactsInvitation from '../../components/ContactsInvitation/ContactsInvitation'

const Contacts = () => {
  return (
    <div>
      <h2>Mes contacts</h2>
      <ContactsList />
      <ContactsInvitation />
    </div>
  )
}

export default Contacts