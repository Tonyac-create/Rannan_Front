import React, { useState } from 'react';
import BtnModifyInfo from '../MI-Boutons/BtnModifyInfo/BtnModifyInfo';
import { Button, Card } from 'flowbite-react';
import BtnDeleteInfo from '../MI-Boutons/BtnDeleteInfo/BtnDeleteInfo';

const InformationCard = (props: any) => {
  const { id } = props

  return (
    <Card key={id} className='informationCard'>

      <h5 className="scroll-m-20 text-xl font-semibold tracking-tight ">{id.name}</h5>
      <h4 className="scroll-m-20 text-l font-semibold tracking-tight ">{id.value}</h4>
     
        <Button.Group className='flex justify-center gap-2'>
          <>
            <BtnModifyInfo
              id={id}
              name={id.name}
              value={id.value}
            />
            <BtnDeleteInfo id={id} />
          </>
        </Button.Group>
      
    </Card>
  )
}

export default InformationCard