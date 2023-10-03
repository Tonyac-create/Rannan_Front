import { Card, Dropdown } from 'flowbite-react';
import AvatarCard from '../AvatarCard/AvatarCard';
import { Link } from 'react-router-dom';

export default function ProfileCard() {
  return (
    <Card className='w-full'>
      <Dropdown inline label="Compte">
        <Dropdown.Item className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" >
          <Link to="/account" >
            <p>Paramètres</p>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" >
          <Link to="/login" >
            <p>Déconnecter</p>
          </Link>
        </Dropdown.Item>
      </Dropdown>

      <AvatarCard />

    </Card>
  )
}