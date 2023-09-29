import React from 'react'
import AddContact from '../../Forms/AddContact/AddContact'

const ModalAddContact = () => {
  return (
    <div className='modalAddContact flex flex-col gap-3'>
        <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Ajouter un contact:</h3>
        <AddContact />
    </div>
  )
}

export default ModalAddContact