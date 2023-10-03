import React, { useEffect, useState } from 'react'
import InformationCard from './MI-InformationCard/InformationCard';
import BtnCreateInfo from './MI-Boutons/BtnCreateInfo/BtnCreateInfo';

const MyInformations = () => {
    const datas = [
        {id: "1",
        name: "adresse maison",
        type: "adresse",
        value: "3 rue papu, xx000 Papuville"
        },
        {id: "2",
        name: "telephone perso",
        type: "telephone",
        value: "0123456789"
        }
    ]
    
    //Récupérer et afficher la liste des datas
    const [informations, setInformations] = useState();
    
    useEffect(() => {
        const displayAllInformations = () => {
            //Récupérer service API getallinformations (à faire)
            setInformations(datas);
        }
        displayAllInformations();
    }, []);

  return (
    <div className='myInformations sm:w-1/2 p-2 '>
        <div className='myInformations__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
            <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Vos données:</h2>
            {datas.map(data => {
                return(
                    <InformationCard id={data.id} name={data.name} />
                )
            })}
            <BtnCreateInfo/>
        </div>    
    </div>
  )
}

export default MyInformations