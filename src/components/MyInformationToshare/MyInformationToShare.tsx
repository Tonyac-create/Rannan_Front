import { Button, Checkbox, Label } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { getUserDatas } from '../../services/api/data';

function MyInformationToShare() {

    //Récupérer et afficher la liste des datas
    const [informations, setInformations] = useState([]);

    useEffect(() => {
        const displayAllInformations = async () => {

            //Récupérer service API getallinformations
            const datas: any = await getUserDatas()
            const arrayDatas = datas.data.data
            setInformations(arrayDatas);
        }

        displayAllInformations();
    }, [])

    const [checkedData, setCheckedData] = useState(false)
    console.log("🚀 ~ file: MyInformationToShare.tsx:21 ~ MyInformationToShare ~ checkedData:", checkedData)

    const handlechecked = (data: any) => {
        setCheckedData(data)
    }

    const handleData = () => {
        console.log("hello");
        // Appel API createShare()
    }

    return (
        <div className="flex max-w-md flex-col gap-4 ml-3">
            <h3 className='text-2xl font-bold my-2'>Mes informations</h3>
            {
                informations.length > 0 ? informations.map((data: any, index: any) => {
                    return (
                        <div className='flex flex-row items-center' key={index}>
                            <Checkbox
                                checked={checkedData === data}
                                onChange={() => handlechecked(data)}
                            />
                            <Label
                                className="flex grow pl-2"
                                htmlFor="agree"
                            >
                                <p>
                                    {data.value}
                                </p>
                            </Label>
                            <Button key={data.id} onClick={handleData}>Ajouter</Button>
                        </div>
                    )

                }) : <p>Pas d'informations partagées</p>
            }
        </div>
    )
}

export default MyInformationToShare