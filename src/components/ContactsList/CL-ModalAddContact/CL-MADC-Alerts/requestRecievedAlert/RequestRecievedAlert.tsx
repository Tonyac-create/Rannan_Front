'use client';
import React from 'react';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const RequestReccievedAlert = () => {
  return (
    <Alert color="warning" icon={HiInformationCircle}>
        <p>
          <span className="font-medium flex justify-between">
            Info!
          </span>
            Ce contact vous a déjà envoyé une demande!
        </p>
    </Alert>
  )
}

export default RequestReccievedAlert