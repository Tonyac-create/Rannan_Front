import { Button, Sidebar} from 'flowbite-react';
import { SidebarItemGroup } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup';
import { HiFingerPrint, HiViewList, HiChartPie, HiInbox, HiUser, HiViewBoards, HiPlusSm } from 'react-icons/hi';
import ProfileCard from '../ProfileCard/ProfileCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LogoBranding() {
  const [ seeMenu, setSeeMenu ] = useState(false)
  const toggleSeeMenu = () => {
    setSeeMenu(!seeMenu)
  }


  return (
    <>
      <section className='sm:hidden fixed bottom-5 flex justify-center items-center w-full h-12'>
        <Button.Group>
          <Button color="gray" as={Link} to="/home">
            <HiChartPie className="h-8 w-8" />
          </Button>
          <Button color="gray" as={Link} to="/groups">
            <HiViewBoards className="h-8 w-8" />
          </Button>
          <Button color="gray" as={Link} to="/contacts">
            <HiInbox className="h-8 w-8" />
          </Button>
          <Button color="gray" as={Link} to="/shares">
            <HiUser className="h-8 w-8" />
          </Button>
          <Button color="gray" onClick={() => toggleSeeMenu()}>
            <HiPlusSm className="h-8 w-8" />
          </Button>
        </Button.Group>
        {seeMenu && (
          <div className='fixed right-4 bottom-16 mb-4 z-50'>
            <ProfileCard />
            <div className='flex flex-col justify-around h-20 mt-2 text-end'>
              <Button size="xs" href="/about">
                <p>A propos</p>
              </Button>
              <Button size="xs" href="/legal">
                <p>Mentions Légales</p>
              </Button>
            </div>
          </div>
        )}
      </section>

      <Sidebar aria-label="Sidebar Navigation Menu" className='hidden sm:block sm:fixed w-2/5 sm:w-4/12 md:w-3/12 lg:w-2/12 h-auto sm:h-full z-50'>
        <Sidebar.Logo href="/" img="/src/asset/Rannan_Dev.png" imgAlt="R Logo">
          <p>Rannan.io</p>
        </Sidebar.Logo>

        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to="/home" icon={HiChartPie} >
            <p>Mon Profil</p>
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/groups" icon={HiViewBoards} >
            <p>Mes Groupes</p>
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/contacts" icon={HiInbox} >
            <p>Mes Contacts</p>
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/shares" icon={HiUser} >
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
    </>
  )
}


