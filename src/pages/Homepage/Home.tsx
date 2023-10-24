import MyInformations from '../../components/MyInformations/MyInformations'
import ContactsList from '../../components/ContactsList/ContactsList'
import Layout2 from '../../components/Layouts/Layout2'

const Home = () => {

  return (
    <Layout2>
      <section className="flex justify-center p-8">
        <h2 className="text-3xl font-medium">Mon Profil</h2>
      </section>
      <div className='homepage flex flex-col sm:flex-row  gap-4 p-5 mb-20 sm:mb-0'>
        <MyInformations />
        <ContactsList />
      </div>
    </Layout2>
  )
}

export default Home