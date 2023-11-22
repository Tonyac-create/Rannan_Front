'use client';
import React from 'react';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const IsContactAlert = () => {
  return (
    <Alert color="info" icon={HiInformationCircle}>
      <p>
          <span className="font-medium flex justify-between">
            Info!
          </span>
          Ce contact est déjà dans votre liste de contacts!
      </p>
    </Alert>
  )
}

export default IsContactAlert