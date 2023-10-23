import { Card, Dropdown } from 'flowbite-react';
import AvatarCard from '../AvatarCard/AvatarCard';
import { Link } from 'react-router-dom';
import { logOut } from '../../services/API/auth';

export default function ProfileCard() {

  const handleLogout = (event: any) => {
    event.preventDefault()
    logOut()
  }

  return (
    <Card className='w-full'>
      <Dropdown inline label="Compte">
        <Dropdown.Item className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" >
          <Link to="/account" >
            <p>Paramètres</p>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" >
          <a onClick={(event) => handleLogout(event)} >
            <p>Déconnecter</p>
          </a>
        </Dropdown.Item>
      </Dropdown>

      <AvatarCard userProfile={{avatar_id: 0, nickname: "EN DUR"}} />

    </Card>
  )
}