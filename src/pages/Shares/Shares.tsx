import { Button, Label, Checkbox, Modal } from 'flowbite-react';
import { ListGroup } from 'flowbite-react';
import Layout2 from '../../components/Layouts/Layout2';
import { useEffect, useState } from 'react';
import MyInformationToShare from '../../components/MyInformationToshare/MyInformationToShare';
import { getListUsersGroups, getShares } from '../../services/api/data';
import BtnDeleteShare from '../../components/MyInformations/MI-Boutons/BtnDeleteShare/BtnDeleteShare';
import SearchUser from '../../components/Forms/SearchUser/SearchUser';
import { getProfile } from '../../services/api/users';
import { getOnegroup } from '../../services/api/groups';

const Shares = () => {

  const [openModal, setOpenModal] = useState<string | undefined>()

  // Header de la liste des users et groups boutons cliquables pour avoir soit users soit groups
  const [seeList, setSeeList] = useState("user")

  const handleSeeList = async (role: string) => {
    setSeeList(role)
    // const displayUsers: any = await getListUsersGroups("user")
    // if (role === "user") {
    //   // Récupére les datas partagées avec le premier user de la liste
    //   firstUserList = displayUsers.data[0]
    //   const idUser = firstUserList.id
    //   // Appel API pour récupérer les datas du 1er user du tableau
    //   const displayDatas: any = await getShares(idUser, "user")
    //   const arrayDatas = displayDatas.data.data
    //   setInformation(arrayDatas)
    // }
  }

  // Récupérer et afficher les noms des groups
  const [arrayGroup, setArrayGroup] = useState([] as any)

  const listNameGroup = async () => {
    // Va chercher les groupes avec partage
    const displayGroup: any = await getListUsersGroups("group")
    // Récupère id et name de chaque groupe
    if (displayGroup !== undefined) {
      const listGroupName = await Promise.all(
        displayGroup.map(async (idGroup: any) => {
          const groupFound: any = await getOnegroup(idGroup);
          return { id: idGroup, name: groupFound.data.name };
        })
      )
      setArrayGroup(listGroupName)
      // Affichage des infos partagés avec le 1er groupe de la liste
      const firstGroupList = displayGroup[0] // Objet = {id: number, nickname=string}
      const idGroup = firstGroupList.id
      // Appel API pour récupérer les datas du 1er user du tableau
      const displayDatas: any = await getShares(idGroup, "group")
      const arrayDatas = displayDatas.data
      setInformation(arrayDatas)
    }
  }

  // Récupérer et afficher les noms des users
  const [arrayUsers, setArrayUsers] = useState([] as any)

  // Afficher les informations partagées liés au user
  const [information, setInformation] = useState([] as any)

  let firstUserList: any

  const [shareId, setshareId] = useState("")

  // Au chargement ou rafraichissement de la page
  useEffect(() => {
    const displayUserWithShare = async () => {

      // Récupére la liste des users avec qui on a des partages
      const displayUsers: any = await getListUsersGroups("user")
      if (displayUsers.length > 0) {
        let userNicknames: any[] = []
        for (const userId of displayUsers) {
          // Faire un appel API pour chaque userId
          const apiResponse = await getProfile(userId)
          userNicknames.push({ id: userId, name: apiResponse.data.nickname })
        }
        setArrayUsers(userNicknames);
        // Appel API pour récupérer les datas du 1er user du tableau
        firstUserList = displayUsers[0]
        const displayDatas: any = await getShares(firstUserList, "user")
        const arrayDatas = displayDatas.data
        setshareId(arrayDatas[0].idShare)
        setInformation(arrayDatas)
      }
    }
    displayUserWithShare()
  }, [])


  // id récupérer d'un user déjà existant dans la liste
  const [targetId, setTargetId] = useState(null)
  const [_userTest, setUserTest] = useState("")
  // id récupérer quand il ya un ajout d'un new user dans la liste
  const [newUserIdList, setNewUserIdList] = useState("")

  // Affichage des datas partagées avec un user ou un group
  const displayInformation = async (id: any) => {
    // console.log("🚀 ~ displayInformation ~ id:", id)
    setUserTest(id)
    // Quand on cherche un user, on l'ajoute à la liste
    // on rajoute un partage, récupération de l'id du user
    setNewUserIdList(id)
    const displayUsers: any = await getListUsersGroups(seeList)
    const arrayUsersNickname = displayUsers
    let userId: any
    arrayUsersNickname.map((user: any) => {
      if (user.id === id) {
        userId = user.id
        setTargetId(userId)
      }
    })

    // Récupére les datas partagées entre les deux users quand click sur le nom de l'utilisateur
    const displayDatas: any = await getShares(id, seeList)
    const arrayDatas = displayDatas.data
    setInformation(arrayDatas)
  }

  // Sélection d'une data
  const [checkedData, setCheckedData] = useState<any[]>([])

  const handleChecked = async (data: any) => {
    if (checkedData.includes(data)) {
      setCheckedData(checkedData.filter(item => item !== data))
    } else {
      setCheckedData([...checkedData, data])
    }

  }

  const [isAddButtonClicked, setAddButtonClicked] = useState(false)

  return (
    <>

      <Layout2>
        <section className="flex justify-center p-8">

          <h2 className="text-3xl font-medium">Mes Partages <br /> <span className='text-xl font-medium'>Cliquez sur un utilisateur pour partager une information ou la supprimer le partage d'une information</span> </h2>
        </section>

        {arrayUsers && (
          <div className="flex flex-row">

            {/* Partie gauche */}

            {/* Recherche users ou groups */}
            <div className="flex max-w-md flex-col gap-4 m-3 w-6/12">

              <p>Ajouter un utilisateur</p>
              <SearchUser arrayUsers={arrayUsers} setArrayUsers={setArrayUsers} />

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
                  {
                    seeList === 'user' ? arrayUsers.map((element: any) => (
                      <ListGroup key={element.id}>
                        <ListGroup.Item onClick={() => {
                          displayInformation(element.id)
                          setAddButtonClicked(true)
                        }}>
                          {element.name}
                        </ListGroup.Item>
                      </ListGroup>
                    )) : (
                      <>
                        {arrayGroup.length === 0 ? (
                          <p>Aucun groupe disponible.</p>
                        ) : (
                          arrayGroup.map((element: any) => (
                            <ListGroup key={element.id}>
                              <ListGroup.Item onClick={() => {
                                displayInformation(element.id)
                                setAddButtonClicked(true)
                              }}>
                                {element.name}
                              </ListGroup.Item>
                            </ListGroup>
                          ))
                        )}
                      </>
                    )}
                </div>
              </div>


            </div>

            {/* Partie droite liste des partages avec un user ou un group */}
            <div className="flex max-w-md flex-col gap-4 m-3 w-6/12">

              <h3 className='text-2xl font-bold my-2'>Mes informations partagées</h3>
              {
                information && information.length > 0 ? information.map((data: any, index: any) => {
                  const isChecked = checkedData.includes(data)
                  return (
                    <div className="flex items-center gap-2" key={index}>
                      <Checkbox
                        key={data.id}
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

                      <BtnDeleteShare dataId={data.id} idToShare={shareId} disabled={!isChecked} />
                    </div>
                  )
                }) : <p>Pas d'informations partagées</p>
              }

              {/* Créer un partage */}
              <Button
                className='mt-2 w-6/12'
                onClick={() => setOpenModal('form-elements')}
                disabled={!isAddButtonClicked}>
                Ajouter un partage
              </Button>


              <Modal show={openModal === 'form-elements'} size="md" popup onClose={() => setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                  <MyInformationToShare
                    targetId={targetId}
                    seeList={seeList}
                    newUserId={newUserIdList}
                    setOpenModal={setOpenModal}
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
