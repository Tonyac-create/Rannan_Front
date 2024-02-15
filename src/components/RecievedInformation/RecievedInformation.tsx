import { useState } from 'react';
import { Label, Modal } from 'flowbite-react';
import InfoModal from './RI-InfoModal/InfoModal';
import { getOneDataById } from '../../services/api/data';

const RecievedInformation = ({ informationsReceived }: any) => {

  const [openModal, setOpenModal] = useState<string | undefined>();

  const [ nameData, setNameData ] = useState("")
  const [ valueData, setValueData ] = useState("")

  // TODO => Appel API pour récupérer les informations partagées entre le user contact et user connecté

  // Appel API pour récupérer une data et afficher le détail dans la modale
  const handleLinkClick = (id: any) => {
    const getData = async () => {
      const data: any = await getOneDataById(id)
      setNameData(data.data.name)
      setValueData(data.data.value)
    }
    getData()

    // Mise à jour de l'état de la modal
    setOpenModal('dismissible');
  };


  return (
    <div className="sharedInformation rounded-md p-2 shadow-xl flex flex-col gap-4 sm:w-1/2">
      <h3 className='scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0'>Informations reçues</h3>
      {informationsReceived && informationsReceived.length > 0 ?
        informationsReceived.map((data: any, index: any) => {
          return (
            <div className="flex items-center gap-2">
              <Label
                className="flex grow"
                htmlFor="agree"
                key={index}
              >
                <p>
                  {data.value}
                </p>
              </Label>
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={() => handleLinkClick(data.id)}
              >
                Détails
              </a>
              {openModal && (
                <Modal dismissible show={openModal === 'dismissible'} onClose={() => setOpenModal(undefined)}>
                  <InfoModal name={nameData} value={valueData}/>
                </Modal>
              )}
            </div>
          )
        }) : <p>Pas d'informations partagées</p>
      }
    </div>
  )
}

export default RecievedInformation