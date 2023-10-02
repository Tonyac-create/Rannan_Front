import React from 'react'
import SentRequests from './SentRequests/SentRequests'
import RecievedRequests from './RecievedRequests/RecievedRequests'

const ContactsInvitation = () => {
  return (
    <div className='contactsInvitation flex flex-col gap-6'>
        <SentRequests />
        <RecievedRequests />
    </div>
  )
}

export default ContactsInvitation