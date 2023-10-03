import React from 'react'
import ContactsList from '../../components/ContactsList/ContactsList'
import ContactsInvitation from '../../components/ContactsInvitation/ContactsInvitation'
import Layout2 from '../../components/Layouts/Layout2'

const Contacts = () => {
  return (
    <Layout2>
      <div className='flex flex-row  gap-4 p-5'>
        <ContactsList />
        <ContactsInvitation />
      </div>
    </Layout2>
  )
}

export default Contacts