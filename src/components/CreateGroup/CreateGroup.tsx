import { Button, Label, Modal, TextInput } from "flowbite-react"
import { useState } from "react"
import { createGroup } from "../../services/api/groups"



const CreateGroup = (props: any) => {
  const { setSeeSetting,setSeeCreate, setSelectedGroup } = props

  const [ groupName, setGroupName ] = useState("")
  const [ limitedDate, setLimitedDate ] = useState("")
  const [ seeError, setSeeError ] = useState(false)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const group = {name: groupName, limited_at: limitedDate}
    const response = await createGroup(group)
    if ( response.status === 500 ) {

    }
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

      <Modal show={seeError} onClose={() => setSeeError(false)}>
        <Modal.Header>Paramétres du groupe</Modal.Header>
        <Modal.Body>
          <p>Une erreur c'est produite, veuillez essayer a nouveau dans un instant.</p>
          <Button onClick={() => setSeeError(false)}>J'ai compris</Button>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default CreateGroup