import { Route, Routes } from 'react-router-dom'
import './App.css'
import Profile from './pages/Profile/Profile'
import Groups from './pages/Groups/Groups'
import Contacts from './pages/Contacts/Contacts'
import Shares from './pages/Shares/Shares'
import Login from './pages/Login/Login'
import About from './pages/About/About'
import Legal from './pages/MentionsLegales/Legal'
// import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Signup from './components/Signup/Signup'
// import PasswordForgot from './components/PasswordModif/PasswordModif'
import PasswordRecup from './components/PasswordRecup/PasswordRecup'
// import ContactsData from './components/ContactsData/ContactsData'

function App() {
	return (
		<>
			<Header />
			{/* <SideBar /> */}
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/passwordRecup' element={<PasswordRecup />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/groups" element={<Groups />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/shares" element={<Shares />} />
				<Route path='/about' element={<About />} />
				<Route path='/legal' element={<Legal />} />
			</Routes>
			<Footer />
		</>
	)
}
export default App
