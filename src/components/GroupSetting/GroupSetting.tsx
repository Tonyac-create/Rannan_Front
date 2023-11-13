import { Button, Label, TextInput } from "flowbite-react"
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
          <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col sm:flex-row justify-around items-center gap-4">
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
              Valider
            </Button>
          </form>
        </section>
        <section className="flex flex-col sm:flex-row justify-around gap-4 my-4 pr-2 sm:p-0">
          <div className="w-full sm:w-2/5 p-1">
            <UserList listFor="ModifyMembers" list={memberList} />
          </div>
          <div className="flex flex-col w-full sm:w-2/5 gap-4 p-1">
            <section>
            <UserList listFor="ModifyContacts" list={contactList} />
            </section>
            <section>
              <SearchUser />
            </section>
          </div>
        </section>
    </>
  )
}

export default GroupSetting