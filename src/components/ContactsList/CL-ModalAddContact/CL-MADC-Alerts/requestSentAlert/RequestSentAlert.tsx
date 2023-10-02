'use client';
import React from 'react';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const RequestSentAlert = () => {
  return (
    <Alert color="warning" icon={HiInformationCircle}>
        <p>
          <span className="font-medium flex justify-between">
            Info!
          </span>
            Vous avez déjà envoyé une demande à ce contact!
        </p>
    </Alert>
  )
}

export default RequestSentAlert