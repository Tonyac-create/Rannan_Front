import { Button, Label, Checkbox, Modal } from 'flowbite-react';
import { ListGroup } from 'flowbite-react';
import Layout2 from '../../components/Layouts/Layout2';
import { useEffect, useState } from 'react';
import MyInformationToShare from '../../components/MyInformationToshare/MyInformationToShare';
import { getListUsersGroups, getShareById, getShares } from '../../services/api/data';
import BtnDeleteShare from '../../components/BtnDeleteShare/BtnDeleteShare';
import SearchUser from '../../components/Forms/SearchUser/SearchUser';

const Shares = (props: any) => {

  const [openModal, setOpenModal] = useState<string | undefined>();
  const pro = { openModal, setOpenModal }

  const { shareId } = props

  // Header de la liste des users et groups boutons cliquables pour avoir soit users soit groups
  // Un appel au chargement de la page pour avoir les users avec qui on partage

  const [seeList, setSeeList] = useState("user")
  // Récupérer et afficher les noms des groups
  const [arrayGroup, setArrayGroup] = useState([] as any)

  const handleSeeList = async (role: string) => {
    setSeeList(role)
  }

  const listNameGroup = async () => {
    const displayGroup: any = await getListUsersGroups("group")
    const arrayGroupName = displayGroup.data.data
    const listGroupName = arrayGroupName.map((name: any) => {
      if (name.id) {
        return { ...name }
      }
      return listGroupName
    })
    setArrayGroup(listGroupName)
  }

  // Récupérer et afficher les noms des users
  const [arrayUsers, setArrayUsers] = useState([] as any)

  // Afficher les informations liés au user
  const [information, setInformation] = useState([] as any)

  // Au chargement ou rafraichissement de la page
  useEffect(() => {
    const displayUserWithShare = async () => {

      // Récupére la liste des users avec qui on a des partages
      const displayUsers: any = await getListUsersGroups("user")

      if (displayUsers.length > 0) {
        const arrayUsersNickname = displayUsers.data.data
        setArrayUsers(arrayUsersNickname)
        // Récupére les datas partagées avec le premier user de la liste
        const firstUserList = displayUsers.data.data[0] // Objet = {id: number, nickname=string}
        const idUser = firstUserList.id
        // Appel API pour récupérer les datas du 1er user du tableau
        const displayDatas: any = await getShares(idUser, "user")
        const arrayDatas = displayDatas.data.data
        setInformation(arrayDatas)
      }
    }

    displayUserWithShare()
  }, [])

  const [targetId, setTargetId] = useState(null)


  // Affichage des datas partagées avec un user ou un group
  const displayInformation = async (id: any) => {
    const displayUsers: any = await getListUsersGroups(seeList)
    const arrayUsersNickname = displayUsers.data.data
    let userId: any
    arrayUsersNickname.map((user: any) => {
      if (user.id === id) {
        userId = user.id
      }
    })
    setTargetId(userId)

    const displayDatas: any = await getShares(userId, seeList)
    const arrayDatas = displayDatas.data.data
    setInformation(arrayDatas)
  }

  // Sélectionn d'une data
  const [checkedData, setCheckedData] = useState<any[]>([])

  const handleChecked = async (data: any) => {
    // setCheckedData(data)

    if (checkedData.includes(data)) {
      setCheckedData(checkedData.filter(item => item !== data))
    } else {
      setCheckedData([...checkedData, data])
    }


    // const getShare = await getShareById(shareId)
    // console.log("🚀 ~ file: Shares.tsx:106 ~ handleChecked ~ getShare:", getShare)
  }

  // Suppression d'un partage au click du bouton
  // const [openModalDeleteShare, setOpenModalDeleteShare] = useState(false)

  return (
    <>

      <Layout2>
        <section className="flex justify-center p-8">

          <h2 className="text-3xl font-medium">Mes Partages</h2>
        </section>

        {arrayUsers && (
          <div className="flex flex-row">

            {/* Partie gauche */}
            {/* Recherche users ou groups */}
            <div className="flex max-w-md flex-col gap-4 m-3 w-6/12">

              <p>Ajouter un utilisateur</p>
              <SearchUser />
              {/* arrayUsers={arrayUsers} */}

              {/* Liste des utilsateurs et groupes avec qui il y a des partages */}

              <div className="flex flex-col items-center min-w-2/5 m-5">
                <Button.Group className="w-full">
                  <Button
                    color="white"
                    onClick={() => handleSeeList("user")}
                    className={`w-full border border-cyan-700 ${seeList === "user" && ('bg-cyan-700 text-white')}`}>
                    Utilisateur(s)
                  </Button>
                  <Button
                    color="white"
                    onClick={
                      () => {
                        handleSeeList("group")
                        listNameGroup()
                      }
                    }
                    className={`w-full border border-cyan-700 ${seeList === "group" && ('bg-cyan-700 text-white')}`}>
                    Groupe(s)
                  </Button>
                </Button.Group>
                <div className="w-full">
                  {seeList === 'user' ? arrayUsers.map((element: any) => (
                    <ListGroup key={element.id}>
                      <ListGroup.Item onClick={() => displayInformation(element.id)}>
                        {element.nickname}
                      </ListGroup.Item>
                    </ListGroup>
                  )) : arrayGroup.map((element: any) => (
                    <ListGroup >
                      <ListGroup.Item onClick={() => displayInformation(element.id)}>
                        {element.name}
                      </ListGroup.Item>
                    </ListGroup>
                  ))}
                </div>
              </div>


            </div>

            {/* Partie droite liste des partages avec un user ou un group */}
            <div className="flex max-w-md flex-col gap-4 m-3 w-6/12">

              <h3 className='text-2xl font-bold my-2'>Mes informations partagées</h3>
              {
                information.length > 0 ? information.map((data: any, index: any) => {
                  const isChecked = checkedData.includes(data)
                  return (
                    <div className="flex items-center gap-2" key={index}>
                      <Checkbox
                        checked={checkedData.includes(data)}
                        onChange={() => handleChecked(data)}
                      />
                      <Label
                        className="flex grow"
                        htmlFor="agree"
                      >
                        <p>
                          {data.value}
                        </p>
                      </Label>

                      <BtnDeleteShare shareId={shareId} disabled={!isChecked} />
                    </div>
                  )
                }) : <p>Pas d'informations partagées</p>
              }

              {/* Créer un partage */}
              <Button
                className='mt-2 w-6/12'
                onClick={() => pro.setOpenModal('form-elements')}
                disabled={arrayUsers.length === 0 && arrayGroup.length === 0}
              >Ajouter un partage</Button>

              <Modal show={pro.openModal === 'form-elements'} size="md" popup onClose={() => pro.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                  <MyInformationToShare
                    targetId={targetId}
                    seeList={seeList}
                  />
                </Modal.Body>
              </Modal>
            </div>

          </div>
        )}

      </Layout2>
    </>
  )
}
export default Shares
