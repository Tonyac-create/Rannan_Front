import { Button, Card } from 'flowbite-react'
import React from 'react'
import { HiCheck, HiX } from 'react-icons/hi'

const RequestForm = (props) => {
  const {nickname, id, handleRefuse, handleAccept, dataTarget} = props;

  return (
    <Card className="addUserCard w-1/1" id={id} data-user={dataTarget}>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{nickname}</h4>
      <Button.Group className='flex justify-end'>
      <Button color="success" onClick={handleAccept}>
        <span className='sm:hidden'><HiCheck className="h-6 w-6"/></span>
        <span className='hidden sm:block'>Accepter</span>
      </Button>
      <Button color="failure" onClick={handleRefuse}> 
        <span className='sm:hidden'><HiX className="h-6 w-6"/></span>
        <span className='hidden sm:block'>Refuser</span>
      </Button>
    </Button.Group>
    </Card>
  )
}

export default RequestForm