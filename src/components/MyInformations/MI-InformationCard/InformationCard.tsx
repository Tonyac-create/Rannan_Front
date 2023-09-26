import React from 'react';
import BtnModifyInfo from '../MI-Boutons/BtnModifyInfo/BtnModifyInfo';
import { Button } from 'flowbite-react';
import BtnDeleteInfo from '../MI-Boutons/BtnDeleteInfo/BtnDeleteInfo';

const InformationCard = (props) => {
    const { id, name, value } = props;
  return (
    <div key={id} className='informationCard flex flex-row content-center items-center justify-around bg-gray-200 rounded-md  gap-3 p-2 shadow-lg sm:gap-10'>
        <h3 className="scroll-m-20 text-l font-semibold tracking-tight w-1/3 sm:text-xl">{name}</h3>
        <div className='informationCard__actions flex flex-row  gap-1 w-1/3 sm:gap-5 sm:w-2/3'>
            <Button.Group className='informationCard__actions flex flex-row  gap-1 w-1/3 sm:gap-5'>
                <BtnModifyInfo id={id} name={name} value={value}/>
                <BtnDeleteInfo />
            </Button.Group>
        </div>   
    </div>
  )
}

export default InformationCard