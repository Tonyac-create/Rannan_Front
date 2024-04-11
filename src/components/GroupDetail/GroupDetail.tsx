import UserList from "../UserList/UserList"
import { Button, ListGroup, Modal } from "flowbite-react"
import { useEffect, useState } from "react"
import { getGroupDetail, removeMemberGroup } from "../../services/api/groups"
import { getOneDataById, getShares } from "../../services/api/data"
import MyInformationToShare from "../MyInformationToshare/MyInformationToShare"


const GroupDetail = (props: any) => {

  const { role, selectedGroup, setDel, seeSetting, seeDelete } = props
  const user_id = localStorage.getItem("user.id")
  const [memberList, setMemberList] = useState<[{ id: number, nickname: string }] | null>(null)
  const [dataList, setDataList] = useState<[{ _id: number, name: string, value: any }] | null>(null)
  const [openModal, setOpenModal] = useState(false)
  const [openModalShare, setOpenModalShare] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getGroupDetail(selectedGroup.id)
      setMemberList(response.memberList)
      setDataList(response.data.dataList)
    }
    fetchData()
  }, [selectedGroup, dataList])

  const handleLeave = async () => {
    await removeMemberGroup(selectedGroup.id, { user_id })
    setOpenModal(false)
    setDel(null)
  }

  const handleSetting = (event: any) => {
    event.preventDefault()
    seeSetting(true)
  }

  const handleDelete = (event: any) => {
    event.preventDefault()
    seeDelete(true)
  }

  return (
    <>
      <section className="border-4 border-teal-600 rounded-xl p-2">
        <section className="flex flex-col justify-center items-center">
          <h3 className="text-2xl">Détails de "{selectedGroup.name}"</h3>
          <div className="flex justify-evenly gap-2 w-full my-2 text-center md:text-left">
            {role === "member" && (
              <span>Créateur : &ensp;{selectedGroup.creator_nickname}</span>
            )}
            <span>Date limite : &ensp;{selectedGroup.limited_at === null ? "Aucune" : selectedGroup.limited_at}</span>
          </div>
        </section>
        <div className="flex flex-col items-center text-center">
          {role === "creator" && (
            <div className="flex flex-col items-center lg:flex-row lg:justify-around w-full md:w-1/2 gap-1 space-x-1">
              <Button size="xs" className="whitespace-pre" onClick={(event) => handleDelete(event)}>Supprimer le groupe</Button>
              <Button size="xs" className="whitespace-pre" onClick={(event) => handleSetting(event)}>Modifier le groupe</Button>
              <Button
                size="xs"
                className="whitespace-pre"
                onClick={() => setOpenModalShare(true)}
              >
                Ajouter un partage</Button>
              <Modal show={openModalShare === true} size="md" popup onClose={() => setOpenModalShare(false)}>
                <Modal.Header />
                <Modal.Body>
                  <MyInformationToShare
                    targetId={selectedGroup.id}
                    seeList={"group"}
                    setOpenModalShare={setOpenModalShare}
                  />
                </Modal.Body>
              </Modal>
            </div>
          )}
          {role === "member" && (
            <div className="flex flex-col md:flex-row justify-around w-full md:w-1/2 gap-1 space-x-1">
              <Button size="xs" className="whitespace-pre" onClick={() => setOpenModal(true)}>Quitter le groupe</Button>
              <Button
                size="xs"
                className="whitespace-pre"
                onClick={() => setOpenModalShare(true)}
              >
                Ajouter un partage
              </Button>
              <Modal show={openModalShare === true} size="md" popup onClose={() => setOpenModalShare(false)}>
                <Modal.Header />
                <Modal.Body>
                  <MyInformationToShare
                    targetId={selectedGroup.id}
                    seeList={"group"}
                    setOpenModalShare={setOpenModalShare}
                  />
                </Modal.Body>
              </Modal>
            </div>
          )}
          <section className="flex flex-col lg:flex-row justify-around gap-4 w-full my-6">
            {memberList && <UserList listFor="Members" list={memberList} />}

            <ListGroup className="w-full">
              <ListGroup.Item active>
                <p>Informations Partagés</p>
              </ListGroup.Item>
              {dataList && dataList.map((data) => {
                return (
                  <ListGroup.Item key={data._id}>
                    <span>{data.name} / {data.value}</span>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </section>
        </div>
      </section>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Quitter le groupe?</Modal.Header>
        <Modal.Body>
          <span>Etes vous sur de vouloir quitter le groupe?</span>
          <div className="flex gap-5  mt-5">
            <Button color="red" onClick={() => handleLeave()}>Oui</Button>
            <Button onClick={() => setOpenModal(false)}>Non</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default GroupDetail