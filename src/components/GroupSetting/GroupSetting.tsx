import { Button, Label, Modal, TextInput } from "flowbite-react"
import { useEffect, useState } from "react"
import UserList from "../UserList/UserList";
import SearchUser from "../Forms/SearchUser/SearchUser";
import { getGroupDetailForSetting, updateGroup } from "../../services/api/groups";


const GroupSetting = (props: any) => {
  const { selectedGroup, refresh, setRefresh } = props
  const [ groupName, setGroupName ] = useState<string|null>("")
  const [ groupLimit, setGroupLimit ] = useState<string|null>(null)
  const [ memberList, setMemberList ] = useState([])
  const [ contactList, setContactList ] = useState([])
  const [ seeSearch, setSeeSearch ] = useState(false)
  
  // Récupére les données de db.json (a changer pour l'appel API du BACK)
    useEffect(() => {
      const fetchData = async () => {
        try {
        // Appel des informations necessaires
          const response = await getGroupDetailForSetting(selectedGroup.id)
        // Scinde les listes récupéré
          setMemberList(response.data.memberList)
          setContactList(response.data.contactList)
        } catch (error) {
          console.log("Error :", error)
        }
      }
      fetchData()
    }, [selectedGroup, refresh])

    const handleSubmit = async (event: any) => {
      event.preventDefault()
    // Prédéfinir la variable avec l'ancienne valeur si aucun changement
      let newName = selectedGroup.name
      let newDate = selectedGroup.limited_date
    // Définir la variable avec la nouvelle valeur si changement
      if ( groupName !== selectedGroup.name && groupName !== "") {
        newName = groupName
      }
      if ( groupLimit !== selectedGroup.limited_date && groupLimit !== "") {
        newDate = groupLimit
      }
    // Créer l'objet qui contiens les changements pour l'inclure dans le body
      const updatedGroup = {
        name: newName,
        limited_at: newDate
      }
    // Envoi l'update a l'api
      await updateGroup(selectedGroup.id, updatedGroup)
    // Refresh
      return setRefresh(!refresh)
    }


  return (
    <>
        <section className="flex justify-center">
          <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col sm:flex-row justify-around items-center gap-4 p-2 w-full border-2 rounded-xl border-cyan-700">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="groupName"
                  value="Nom du groupe :"
                />
              </div>
              <TextInput
                id="groupName"
                required
                type="text"
                defaultValue={selectedGroup ? selectedGroup.name : ""}
                onChange={(event) => setGroupName(event.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="limitedDate" value="Date limite :" />
              </div>
              <TextInput 
                id="limitedDate"
                type="date"
                defaultValue={selectedGroup ? selectedGroup.limited_at : ""}
                onChange={(event) => {setGroupLimit(event.target.value)}}
              />
            </div>
            <Button type="submit">
              Valider les informations
            </Button>
          </form>
        </section>
        <section className="flex flex-col justify-evenly gap-2 p-2 sm:flex-row my-2 border-2 rounded-xl border-cyan-700">
          <UserList refresh={refresh} setRefresh={setRefresh} listFor="ModifyMembers" list={memberList} group_id={selectedGroup.id} />
          <UserList refresh={refresh} setRefresh={setRefresh} listFor="ModifyContacts" list={contactList} group_id={selectedGroup.id} />
        </section>
        <div className="flex justify-center w-full">
          <Button className="w-1/2" onClick={() => setSeeSearch(true)}>Rechercher un utilisateur</Button>
        </div>

        <Modal show={seeSearch} onClose={() => setSeeSearch(false)}>
          <Modal.Header>Rechercher un utilisateur</Modal.Header>
          <Modal.Body>
            <SearchUser />
          </Modal.Body>
        </Modal>
    </>
  )
}

export default GroupSetting