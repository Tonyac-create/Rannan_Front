import { Link } from "react-router-dom"


const Header = () => {
  return (
    <>
        <Link to={"/login"} className="flex justify-center items-center">
          <img src="../src/asset/Rannan_Dev.png" alt="logo Rannan" className=" w-1/6" />
          <h1 className="text-8xl font-bold">Rannan.io</h1>
        </Link>
    </>
  )
}
export default Header