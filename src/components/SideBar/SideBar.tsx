import { Sidebar} from 'flowbite-react';
import { SidebarItemGroup } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup';
import { HiFingerPrint, HiViewList, HiChartPie, HiInbox, HiUser, HiViewBoards } from 'react-icons/hi';
import ProfileCard from '../ProfileCard/ProfileCard';

export default function LogoBranding() {
  return (
    <Sidebar aria-label="Sidebar Navigation Menu" className='fixed w-1/2 sm:w-4/12 md:w-3/12 lg:w-2/12'>

      <Sidebar.Logo href="/" img="/src/asset/Rannan_Dev.png" imgAlt="R Logo">
        <p>Rannan.io</p>
      </Sidebar.Logo>

      <Sidebar.ItemGroup>
        <Sidebar.Item href="/home" icon={HiChartPie} >
          <p>Mon Profil</p>
        </Sidebar.Item>
        <Sidebar.Item href="/groups" icon={HiViewBoards} >
          <p>Mes Groupes</p>
        </Sidebar.Item>
        <Sidebar.Item href="/contacts" icon={HiInbox} >
          <p>Mes Contacts</p>
        </Sidebar.Item>
        <Sidebar.Item href="/shares" icon={HiUser} >
          <p>Mes Partages</p>
        </Sidebar.Item>
      </Sidebar.ItemGroup>

      <ProfileCard />

    <SidebarItemGroup>
      <Sidebar.Item
            href="/about"
            icon={HiFingerPrint}
            >
            <p>
              A propos
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/legal"
            icon={HiViewList}
            >
            <p>
              Mentions Légales
            </p>
          </Sidebar.Item>
      </SidebarItemGroup>
    </Sidebar>
  )
}


