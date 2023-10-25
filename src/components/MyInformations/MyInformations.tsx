import React, { useEffect, useState } from 'react'
import InformationCard from './MI-InformationCard/InformationCard';
import BtnCreateInfo from './MI-Boutons/BtnCreateInfo/BtnCreateInfo';
import { getUserDatas } from '../../services/api/data';
import { useParams } from 'react-router-dom';

const MyInformations = () => {

    const { id } = useParams()
    
    //Récupérer et afficher la liste des datas
    const [informations, setInformations] = useState([]);
    
    // Au chargement de la page, appel au back pour récupérer la liste des datas du user connecté
    useEffect(() => {
        const displayAllInformations = async () => {

            //Récupérer service API getallinformations
            const datas: any = await getUserDatas()
            const arrayDatas = datas.data.data
            setInformations(arrayDatas);
        }

        displayAllInformations();
    }, []);

  return (
    <div className='myInformations sm:w-1/2 p-2 '>
        <div className='myInformations__box rounded-md p-2 shadow-xl flex flex-col gap-4'>
            <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-2xl">Vos données:</h3>
            {
                informations.length > 0 ? informations.map((data: any) => {
                    return(
                        <InformationCard id={data} name={data.value} value={data.name}/>
                    )
                }) : <p>Pas d'informations</p>
            }
            
            <BtnCreateInfo />
        </div>    
    </div>
  )
}

export default MyInformations
