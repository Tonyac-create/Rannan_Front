import { useParams } from "react-router-dom"



const GroupDetail = () => {
  const { role, id } = useParams()
  return (
    <>
      <h2>GroupDetail</h2>
      <p>Role : {role}</p>
      <p>Id du groupe : {id}</p>
    </>
  )
}
export default GroupDetail