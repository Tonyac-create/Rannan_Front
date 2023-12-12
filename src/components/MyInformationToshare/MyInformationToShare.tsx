import { Button, Checkbox, Label } from 'flowbite-react'
import{ useEffect, useState } from 'react'
import { createShare, getUserDatas } from '../../services/api/data';
import ModalInfo from '../MyInformations/ModalInfo';

function MyInformationToShare({ targetId, seeList, newUserId }: any) {

    // Modal qui s'ouvre quand on valide la création
    const [modalValidModify, setModalValidModify] = useState(false)

    //Récupérer et afficher la liste des datas
    const [informations, setInformations] = useState([]);
    // console.log("informations", informations);
    
    useEffect(() => {
        const displayAllInformations = async () => {
            //Récupérer service API getallinformations
            const datas: any = await getUserDatas()
            // console.log("🚀 ~ file: MyInformationToShare.tsx:19 ~ displayAllInformations ~ datas:", datas)
            // if(datas.status === true ) { 
                const arrayDatas = datas.data
                setInformations(arrayDatas);
            // }
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

    const [_shareId, setShareId] = useState(null) 

    // Créer un partage de donnée
    const shareData = async (data_id: string) => {
        if (newUserId) {
            // Appel API createShare()
            const dataToShared: any = await createShare(newUserId, data_id, seeList)
            console.log("🚀 ~ file: MyInformationToShare.tsx:43 ~ shareData ~ dataToShared:", dataToShared)
            if (dataToShared) {
                setModalValidModify(true)
                setShareId(dataToShared.data._id)
            }
        } else {
            const dataToShared: any = await createShare(targetId, data_id, seeList)
            console.log("🚀 ~ file: MyInformationToShare.tsx:45 ~ shareData ~ dataToShared:", dataToShared)

            if (dataToShared) {
                setModalValidModify(true)
                setShareId(dataToShared.data._id)
            }
        }
    }

    return (
        <div className="flex max-w-md flex-col gap-4 ml-3">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Partager une donnée</h3>
            {
                informations.length > 0 ? informations.map((data: any) => {
                    const isChecked = checkedData.includes(data)
                    return (
                        <div className='flex flex-row items-center' key={data._id}>
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
                            <Button type='submit' onClick={() => shareData(data._id)} disabled={!isChecked} >Ajouter</Button>
                        </div>
                    )

                }) : <p>Pas d'information(s) à partager</p>
            }
            <ModalInfo
                // setTestModal={setTestModal}
                modalValidModify={modalValidModify}
                setModalValidModify={setModalValidModify}
                textInfo="Information partagée avec succès"
            />
        </div>
    )
}

export default MyInformationToShare