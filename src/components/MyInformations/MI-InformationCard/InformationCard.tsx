import React from 'react';
import BtnModifyInfo from '../MI-Boutons/BtnModifyInfo/BtnModifyInfo';
import { Button, Card } from 'flowbite-react';
import BtnDeleteInfo from '../MI-Boutons/BtnDeleteInfo/BtnDeleteInfo';

const InformationCard = (props) => {
    const { id, name, value } = props;
  return (
    <Card key={id} className='informationCard'>
        <h3 className="scroll-m-20 text-l font-semibold tracking-tight w-1/3 sm:text-xl">{name}</h3>
        <div className='informationCard__actions flex flex-row  gap-1 w-1/3 sm:gap-5 sm:w-2/3'>
            <Button.Group className='informationCard__actions flex flex-row  gap-1 w-1/3 sm:gap-5'>
                <BtnModifyInfo id={id} name={name} value={value}/>
                <BtnDeleteInfo />
            </Button.Group>
        </div>   
    </Card>
  )
}

export default InformationCard