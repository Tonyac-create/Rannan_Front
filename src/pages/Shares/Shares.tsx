import { Button, Label, Checkbox, TextInput, Modal } from 'flowbite-react';
import { ListGroup } from 'flowbite-react';
import Layout2 from '../../components/Layouts/Layout2';
import { useEffect, useState } from 'react';
import MyInformations from '../../components/MyInformations/MyInformations';
import MyGroupsList from '../../components/MyGroupsList/MyGroupsList';

const Shares = () => {

  const [openModal, setOpenModal] = useState<string | undefined>();
  const pro = { openModal, setOpenModal }

  // Header de la liste des users et groups boutons cliquables pour avoir soit users soit groups
  // Un appel au chargement de la page pour avoir les users avec qui on partage

  const [ seeList, setSeeList ] = useState("users")
  const handleSeeList = (role: string) => {
    setSeeList(role)
  }

  const [arrayUsers, setArrayUsers] = useState([] as any)
  const [datas, setDatas] = useState([] as any)

  const [ listUsersOfShare, setListUsersOfShare ] = useState([])
  const [ listGroupsOfShare, setListGroupsOfShare ] = useState([])


  useEffect(() => {
    // Remplacer par l'appel api pour récupérer 
    // la liste des users avec qui on a des partages
    
  }, [])

  // Afficher les informations liés au user
  const [information, setInformation] = useState("users")

  // Incrémenter et Afficher la liste
  const [elementList, setElementList] = useState([] as any)

  // const addElementList = (event: any) => {
  //   // console.log(arrayUsers);
  //   event.preventDefault();
  //   const elementListName = event.target.elements.elementListName.value;
  //   // console.log(elementListName);

  //   arrayUsers.forEach((element: any) => {

  //     if (elementListName === element.nickname) {
  //       const newElementList = { name: elementListName };
  //       setElementList([...elementList, newElementList]);
  //       // setInformation(element.information)
  //       datas.forEach((el: any) => {
  //         if (el.user_id === element.id) {
  //           setInformation(el.value)
  //         }
  //       });
  //     }
  //   });
  // };

  const displayInformation = (id: any) => {

    const informationChange = elementList.map((information: any) => {
      if (elementList.id === id) {
        return { ...information }
      }
      return informationChange
    })

    setInformation(informationChange)

  }

  return (
    <>

      <Layout2>
        <section className="flex justify-center p-8">
          <h2 className="text-3xl font-medium">Mes Partages</h2>
        </section>
        <div className="flex flex-row">
          {/* Partie droite */}
          {/* Recherche contact, user ou group */}
          <div className="flex max-w-md flex-col gap-4 m-3 w-6/12">
            <form>  
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Rechercher un utilisateur"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
                name="elementListName"
              />
              <Button type="submit" className='mt-3'>
                Rechercher
              </Button>
              {/* Récupère la liste de toutes les datas du user(token) */}
              <p className='mt-4'>Votre liste d'informations</p>
              <Button className='mt-2' onClick={() => pro.setOpenModal('form-elements')} >Modifier</Button>
              <Modal show={pro.openModal === 'form-elements'} size="md" popup onClose={() => pro.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                  <MyInformations />
                </Modal.Body>
              </Modal>
            </form>

            {/* Liste des destinataires */}

            <div className="flex flex-col items-center min-w-2/5 m-5">
            <Button.Group className="w-full">
              <Button color="white"  onClick={() => handleSeeList("users")} className={`w-full border border-cyan-700 ${seeList === "users" && ('bg-cyan-700 text-white')}`}>
                Utilisateur(s)
              </Button>
              <Button color="white"  onClick={() => handleSeeList("groups")} className={`w-full border border-cyan-700 ${seeList === "groups" && ('bg-cyan-700 text-white')}`}>
                Groupe(s)
              </Button>
            </Button.Group>
            <div className="w-full">
              {seeList === "users" && (
                <MyGroupsList role="users" />
              )}
              {seeList === "groups" && (
                <MyGroupsList role="groups" />
              )}
            </div>
            </div>
            {/* <div>
              <h3 className='text-2xl font-bold my-2'>Contact(s)/Groupe(s)</h3> */}
              {/* {elementList.map((element: any, index: any) => (
              <ListGroup > */}
                {/* <ListGroup.Item onClick={() => displayInformation(element.id)}>
                  {element.name}Amine
                </ListGroup.Item>
                <ListGroup.Item onClick={() => displayInformation(element.id)}>
                  {element.name}Cayetano
                </ListGroup.Item>
                <ListGroup.Item onClick={() => displayInformation(element.id)}>
                  {/* {element.name} */}
                {/* </ListGroup.Item> */}
              {/* </ListGroup>
              ))}  
            </div> */}

            
          </div>

          {/* Partie droite */}
          <div className="flex max-w-md flex-col gap-4 ml-3 w-6/12">
            <h3 className='text-2xl font-bold my-2'>Mes informations partagées</h3>
            <div
              className="flex max-w-md flex-col gap-4"
              id="checkbox"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  // defaultChecked
                  id="accept"
                />
                <Label
                  className="flex"
                  htmlFor="agree"
                >
                  <p>
                    {/* {information} */}0102030405
                  </p>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  // defaultChecked
                  id="accept"
                />
                <Label
                  className="flex"
                  htmlFor="agree"
                >
                  <p>
                    {/* {information} */}12, rue de la rue
                  </p>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  // defaultChecked
                  id="accept"
                />
                <Label
                  className="flex"
                  htmlFor="agree"
                >
                  <p>
                    {/* {information} */}http://moninsta.fr
                  </p>
                </Label>
              </div>
            </div>
            <Button type="submit" className='mt-3 w-6/12'>
              Valider
            </Button>
          </div>

        </div>
      </Layout2>
    </>
  )
}
export default Shares