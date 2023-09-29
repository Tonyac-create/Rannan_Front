import React from 'react'
import RequestForm from '../Requests/RequestForm/RequestForm'

const RecievedRequests = () => {
  return (
    <div className='recievedRequests myInformations__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
        <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Requêtes reçues:</h2>
        <div className='recievedRequestsList flex flex-col gap-2'>
            <RequestForm />
            <RequestForm />
        </div>
    </div>
  )
}

export default RecievedRequests