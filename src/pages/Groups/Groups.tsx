import { useEffect, useState } from "react"
import Layout2 from "../../components/Layouts/Layout2"
import GroupDetail from "../../components/GroupDetail/GroupDetail"
import { Button, ListGroup, Modal } from "flowbite-react"
import { getCreatorGroupList, getUserGroupList, removeGroup } from "../../services/api/groups"
import CreateGroup from "../../components/CreateGroup/CreateGroup"
import GroupSetting from "../../components/GroupSetting/GroupSetting"


const Groups = () => {
  const [ seeList, setSeeList ] = useState("member")
  const [ groupList, setGroupList ] = useState([])
  const [ selectedGroup, setSelectedGroup ] = useState<{id: string, name: string, limited_at: string}|null>(null)
  const [ delCheck, setDelCheck ] = useState(false)
  const [ seeCreate, setSeeCreate ] = useState(false)
  const [ seeSetting, setSeeSetting ] = useState(false)
  const [ refresh, setRefresh ] = useState(false)

useEffect(() => {
  const fetchApi = async () => {
    try {
      if (seeList === "member") {
        const groups = await getUserGroupList()
        groups.data === undefined ? setGroupList([]) : setGroupList(groups.data)
      }
      if (seeList === "creator") {
        const groups = await getCreatorGroupList()
        groups.data === undefined ? setGroupList([]) : setGroupList(groups.data)
      }
      console.log(selectedGroup)
    } catch (error) {
      console.log("Error :", error)
    }
  }
  fetchApi()
}, [seeList, refresh])

  const handleSeeList = (role: string) => {
    setSelectedGroup(null)
    setSeeList(role)
  }

  const handleSelectGroup = (group_id: string) => {
    const group: any = groupList.find((el: any) => el.id === group_id)
    setSelectedGroup(group)
  }

  const handleDelete = async () => {
    if ( selectedGroup ) {
      await removeGroup(selectedGroup.id)
      setDelCheck(false)
      setSelectedGroup(null)
    }
  }

  return (
    <>
      <Layout2>
        <section className="flex justify-center p-8">
          <h2 className="text-3xl font-medium">Mes Groupes</h2>
        </section>
        <section className="flex flex-col justify-center items-center gap-4 md:flex-row md:items-start">
          <div className="flex flex-row items-start justify-center gap-2 w-10/12 md:flex-col md:items-center md:gap-0 md:w-1/5 p-1">
            <div className="w-full">
              <Button size="xs" className="w-full mb-4" onClick={() => setSeeCreate(true)}>Créer un groupe</Button>
              <div className="flex flex-col w-full lg:flex-row">
                <Button
                  size="xs"
                  color="white"
                  onClick={() => handleSeeList("member")}
                  className={`w-full border border-cyan-700 ${seeList === "member" && ('bg-cyan-700 text-white')}`}>
                    Membre
                </Button>
                <Button
                  size="xs"
                  color="white"
                  onClick={() => handleSeeList("creator")}
                  className={`w-full border border-cyan-700 ${seeList === "creator" && ('bg-cyan-700 text-white')}`}>
                    Créateur
                </Button>
              </div>
            </div>
            <div className="w-full h-3/6">
              {groupList.length === 0 ? <span>Aucun groupe a afficher</span> :
                <ListGroup className='w-full h-full overflow-auto'>
                  {groupList.map((group: any) => {
                    return (
                      <ListGroup.Item key={group.id} onClick={() => handleSelectGroup(group.id)}>
                        <p>{group.name} &ensp;</p>
                      </ListGroup.Item>
                      )
                    })}
                </ListGroup>
              }
            </div>
          </div>
          <div className="w-11/12 md:w-3/5">
            {selectedGroup && <GroupDetail role={seeList} selectedGroup={selectedGroup} setDel={setSelectedGroup} seeSetting={setSeeSetting} seeDelete={setDelCheck} />}
          </div>
        </section>

        <Modal show={seeCreate} onClose={() => setSeeCreate(false)}>
          <Modal.Header>Créer un groupe</Modal.Header>
          <Modal.Body>
            <CreateGroup setSeeSetting={setSeeSetting} setSeeCreate={setSeeCreate} setSelectedGroup={setSelectedGroup} />
          </Modal.Body>
        </Modal>

        <Modal show={delCheck} onClose={() => setDelCheck(false)}>
          <Modal.Header>Supprimer le groupe</Modal.Header>
          <Modal.Body>
            <span>Etes vous sur de vouloir supprimer le groupe?</span>
            <div className="flex gap-5  mt-5">
              <Button color="red" onClick={() => handleDelete()}>Oui</Button>
              <Button onClick={() => setDelCheck(false)}>Non</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={seeSetting} onClose={() => setSeeSetting(false)}>
          <Modal.Header>Paramétres du groupe</Modal.Header>
          <Modal.Body>
            <GroupSetting refresh={refresh} setRefresh={setRefresh} selectedGroup={selectedGroup} />
          </Modal.Body>
        </Modal>

      </Layout2>
    </>
  )
}
export default Groups