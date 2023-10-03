import React from 'react';
import BtnModifyInfo from '../MI-Boutons/BtnModifyInfo/BtnModifyInfo';
import { Button, Card } from 'flowbite-react';
import BtnDeleteInfo from '../MI-Boutons/BtnDeleteInfo/BtnDeleteInfo';

const InformationCard = (props) => {
    const { id, name, value } = props;
  return (
    <Card key={id} className='informationCard'>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight ">{name}</h4>
        <div className='informationCard__actions flex flex-row justify-end gap-5'>
            <Button.Group className='informationCard__actions flex flex-row gap-2 sm:w-1/3'>
                <BtnModifyInfo id={id} name={name} value={value}/>
                <BtnDeleteInfo />
            </Button.Group>
        </div>   
    </Card>
  )
}

export default InformationCard