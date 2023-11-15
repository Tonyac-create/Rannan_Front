import { Button, Label, TextInput } from "flowbite-react"
import { useState } from "react"
import { createGroup } from "../../services/api/groups"



const CreateGroup = (props: any) => {
  const { setSeeSetting,setSeeCreate, setSelectedGroup } = props

  const [ groupName, setGroupName ] = useState("")
  const [ limitedDate, setLimitedDate ] = useState("")

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const group = {name: groupName, limited_at: limitedDate}
    const response = await createGroup(group)
    setSelectedGroup({id: response.data.id, name: response.data.name})
    setSeeCreate(false)
    return setSeeSetting(true)
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="groupName" value="Le nom du groupe" />
          </div>
          <TextInput id="groupName" type="text" required onChange={(event) => setGroupName(event.target.value)} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="limited_at" value="Date Limite" />
          </div>
          <TextInput id="limited_at" type="date" placeholder="non obligatoire" onChange={(event) => setLimitedDate(event.target.value)} />
        </div>
        <Button type="submit">Créer le groupe</Button>
      </form>
    </>
  )
}
export default CreateGroup