import { Route, Routes } from 'react-router-dom'
import './App.css'
import Groups from './pages/Groups/Groups'
import Contacts from './pages/Contacts/Contacts'
import Shares from './pages/Shares/Shares'
import Login from './pages/Login/Login'
import About from './pages/About/About'
import Legal from './pages/MentionsLegales/Legal'
import SideBar from './components/SideBar/SideBar'
import GroupDetail from './components/GroupDetail/GroupDetail'
import MyProfile from './pages/MyProfile/MyProfile'

function App() {
	return (
		<>
			<SideBar />
			<main className='w-1/2 sm:w-8/12 md:w-9/12 lg:w-10/12 ms-auto'>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<MyProfile />} />
					<Route path="/groups" element={<Groups />} />
					<Route path="user/:userId/group/detail/:role/:groupId" element={<GroupDetail />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/shares" element={<Shares />} />
					<Route path='/about' element={<About/>} />
					<Route path='/legal' element={<Legal/>} />
				</Routes>
			</main>
		</>
	)
}
export default App
