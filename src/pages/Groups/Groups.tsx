import MyGroupsList from "../../components/MyGroupsList/MyGroupsList"


const Groups = () => {
  return (
    <>
      <div className="flex justify-around m-4">
        <MyGroupsList role="member" />
        <MyGroupsList role="admin" />
      </div>
    </>
  )
}
export default Groups