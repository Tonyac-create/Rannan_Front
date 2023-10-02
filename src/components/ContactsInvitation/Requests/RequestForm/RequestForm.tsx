import { Button, Card } from 'flowbite-react'
import React from 'react'
import { HiCheck, HiX } from 'react-icons/hi'

const RequestForm = () => {
  return (
    <Card className="addUserCard max-w-sm">
      <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Jesús</h4>
      <Button.Group>
      <Button color="success">
        <span className='sm:hidden'><HiCheck className="h-6 w-6"/></span>
        <span className='hidden sm:block'>Accepeter</span>
      </Button>
      <Button color="failure">
        <span className='sm:hidden'><HiX className="h-6 w-6"/></span>
        <span className='hidden sm:block'>Refuser</span>
      </Button>
    </Button.Group>
    </Card>
  )
}

export default RequestForm