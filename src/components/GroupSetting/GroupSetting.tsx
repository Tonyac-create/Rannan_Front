import { Button, Label, Modal, TextInput } from "flowbite-react"
import { useEffect, useState } from "react"
import UserList from "../UserList/UserList";
import SearchUser from "../Forms/SearchUser/SearchUser";
import { getGroupDetailForSetting, updateGroup } from "../../services/api/groups";


const GroupSetting = (props: any) => {
  const { selectedGroup } = props
  const [ group, setGroup ] = useState<{name: string, limited_at: Date|null}|null>(null)
  const [ groupName, setGroupName ] = useState<string|null>("")
  const [ groupLimit, setGroupLimit ] = useState<Date|null>(null)
  const [ memberList, setMemberList ] = useState([])
  const [ contactList, setContactList ] = useState([])
  const [ seeSearch, setSeeSearch ] = useState(false)
  
  // Récupére les données de db.json (a changer pour l'appel API du BACK)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getGroupDetailForSetting(selectedGroup.id)
          setGroup(response.data.group)
          setMemberList(response.data.memberList)
          setContactList(response.data.contactList)
        } catch (error) {
          console.log("Error :", error)
        }
      }
      fetchData()
    }, [selectedGroup])

    const handleSubmit = async (event: any) => {
      event.preventDefault()
      const updatedGroup = {
        name: groupName,
        limited_at: groupLimit
      }
      await updateGroup(selectedGroup.id, updatedGroup)
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
                defaultValue={group ? group.name : ""}
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
                onChange={(event) => {
                  const dateValue = event.target.value;
                  const parsedDate = dateValue ? new Date(dateValue) : null;
                  setGroupLimit(parsedDate);
                }}
              />
            </div>
            <Button type="submit">
              Valider les informations
            </Button>
          </form>
        </section>
        <section className="flex flex-col justify-evenly gap-2 p-2 sm:flex-row my-2 border-2 rounded-xl border-cyan-700">
          <UserList listFor="ModifyMembers" list={memberList} />
          <UserList listFor="ModifyContacts" list={contactList} />
        </section>
        <div className="flex justify-center w-full">
          <Button className="w-1/2" onClick={() => setSeeSearch(true)}>Rechercher un utilisateur</Button>
        </div>

        <Modal show={seeSearch} onClose={() => setSeeSearch(false)}>
          <Modal.Header>Créer un groupe</Modal.Header>
          <Modal.Body>
            <SearchUser />
          </Modal.Body>
        </Modal>
    </>
  )
}

export default GroupSetting