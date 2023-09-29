'use client';
import { Alert, Table } from 'flowbite-react';
import React from 'react';

const RequestInfo = () => {
  return (
    <Alert color="warning" withBorderAccent>
        <p className='flex flex-row gap-3'>
            <span className='flex flex-row gap-1'>
                <span>User:</span>
                <span>Paco</span>
            </span>
            <span className='flex flex-row gap-1'>
                <span>Statut:</span>
                <span>En attente</span>
            </span>    
        </p>
    </Alert>
  )
}

export default RequestInfo