import SearchUser from '../SearchUser/SearchUser'

const AddContact = (props: any) => {
  const {setOpenModal} = props
  return (
    <div>
      <SearchUser setOpenModal={setOpenModal}/>
    </div>
  )
}

export default AddContact