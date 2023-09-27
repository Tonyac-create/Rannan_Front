import MyGroupsList from "../../components/MyGroupsList/MyGroupsList"


const Groups = () => {
  return (
    <>
      <div  className="flex justify-around m-4">
        <MyGroupsList role="member" userId={1} />
        <MyGroupsList role="admin" userId={1} />
      </div>
    </>
  )
}
export default Groups