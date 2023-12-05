import { Route, Routes } from 'react-router-dom'
import Groups from './pages/Groups/Groups'
import Contacts from './pages/Contacts/Contacts'
import Shares from './pages/Shares/Shares'
import Login from './pages/Login/Login'
import About from './pages/About/About'
import Legal from './pages/MentionsLegales/Legal'
import GroupDetail from './components/GroupDetail/GroupDetail'
import Home from './pages/Homepage/Home'
import Profile from './pages/Profile/Profile'
import Account from './pages/Account/Account'
import Signup from './components/Signup/Signup'
import PrivateRoute from './services/utils/privateRoute'
import NotFoundPage from './services/utils/NotFoundPage'
import ReturnValidation from './pages/Verify/ReturnValidation'
import ReturnReset from './pages/Verify/ReturnReset'
import './App.css'


function App() {


	return (
		<>
			<Routes >

				<Route path="*" element={<NotFoundPage />} />
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/mail/return/validation/:token" element={<ReturnValidation />} />
				<Route path="/mail/return/reset/:token" element={<ReturnReset />} />
				<Route path='/about' element={<About/>} />
				<Route path='/legal' element={<Legal/>} />

				<Route element={<PrivateRoute />}>
					<Route path="/home" element={<Home />} />
					<Route path="/groups" element={<Groups />} />
					<Route path="user/:userId/group/detail/:role/:groupId" element={<GroupDetail />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/profile/:id" element={<Profile />} />
					<Route path="/shares" element={<Shares />} />
					<Route path="/account" element={<Account />} />
				</Route>

			</Routes>
		</>
	)
}
export default App

