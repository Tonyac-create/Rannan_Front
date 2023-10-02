import { Route, Routes } from 'react-router-dom'
import './App.css'
import Groups from './pages/Groups/Groups'
import Contacts from './pages/Contacts/Contacts'
import Shares from './pages/Shares/Shares'
import Login from './pages/Login/Login'
import About from './pages/About/About'
import Legal from './pages/MentionsLegales/Legal'
import GroupDetail from './pages/GroupDetail/GroupDetail'
import Home from './pages/Homepage/Home'
import Profile from './pages/Profile/Profile'
import Account from './pages/Account/Account'
import GroupSetting from './pages/GroupSetting/GroupSetting'

function App() {


	return (
		<>
			<Routes >
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path='/about' element={<About/>} />
				<Route path='/legal' element={<Legal/>} />
				<Route path="/home" element={<Home />} />
				<Route path="/groups" element={<Groups />} />
				<Route path="user/:userId/group/detail/:role/:groupId" element={<GroupDetail />} />
				<Route path="group/:groupId/modify" element={<GroupSetting />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/profile/:id" element={<Profile />} />
				<Route path="/shares" element={<Shares />} />
				<Route path="/account" element={<Account />} />
			</Routes>
		</>
	)
}
export default App

