import React from 'react'
import RequestInfo from '../Requests/RequestInfo/Request'

const SentRequests = () => {
  return (
    <div className='sentRequests myInformations__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
        <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Requêtes envoyées:</h3>
        <div className='sentRequestsList flex flex-col gap-2'>
            <RequestInfo />
            <RequestInfo />
        </div>
    </div>
  )
}

export default SentRequests