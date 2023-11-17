import { Button, Checkbox, Label, Modal } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { createShare, getUserDatas } from '../../services/api/data';
import ModalInfo from '../MyInformations/ModalInfo';

function MyInformationToShare({ targetId, seeList, newUserId }: any) {

    // Modal qui s'ouvre quand on valide la création
    const [modalValidModify, setModalValidModify] = useState(false)

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

    const [checkedData, setCheckedData] = useState<any[]>([])

    const handleChecked = async (data: any) => {

        if (checkedData.includes(data)) {
            setCheckedData(checkedData.filter(item => item !== data))
        } else {
            setCheckedData([...checkedData, data])
        }
    }

    const [shareId, setShareId] = useState(null)

    console.log("newUserId : ", newUserId);
    // Créer un partage de donnée
    const shareData = async (data_id: number) => {
        if (newUserId) {
            // Appel API createShare()
            const dataToShared: any = await createShare(newUserId, data_id, seeList)
            if (dataToShared) {
                setModalValidModify(true)
                setShareId(dataToShared.data.data.id)
            }
        } else {
            console.log("oups");
            
        }
        // Appel API createShare()
        const dataToShared: any = await createShare(targetId, data_id, seeList)
        if (dataToShared) {
            setModalValidModify(true)
            setShareId(dataToShared.data.data.id)
        }
    }

    return (
        <div className="flex max-w-md flex-col gap-4 ml-3">
            <h3 className='text-2xl font-bold my-2'>Mes informations</h3>
            {
                informations.length > 0 ? informations.map((data: any, index: any) => {
                    const isChecked = checkedData.includes(data)
                    return (
                        <div className='flex flex-row items-center' key={index}>
                            <Checkbox
                                checked={checkedData.includes(data)}
                                onChange={() => handleChecked(data)}
                            />
                            <Label
                                className="flex grow pl-2"
                                htmlFor="agree"
                            >
                                <p>
                                    {data.value}
                                </p>
                            </Label>
                            <Button onClick={() => shareData(data.id)} disabled={!isChecked}>Ajouter</Button>
                            <ModalInfo
                                modalValidModify={modalValidModify}
                                setModalValidModify={setModalValidModify}
                                textInfo="Information partagée avec succès"
                            />
                        </div>
                    )

                }) : <p>Pas d'information(s) à partager</p>
            }
        </div>
    )
}

export default MyInformationToShare