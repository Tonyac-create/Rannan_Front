import MyGroupsList from "../../components/MyGroupsList/MyGroupsList"


const Groups = () => {
  const userId = 5
  return (
    <>
      <div  className="flex justify-around m-4">
        <MyGroupsList role="member" userId={userId} />
        <MyGroupsList role="admin" userId={userId} />
      </div>
    </>
  )
}
export default Groups