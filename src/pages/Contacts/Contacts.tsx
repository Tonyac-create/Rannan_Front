import ContactsList from '../../components/ContactsList/ContactsList'
import ContactsInvitation from '../../components/ContactsInvitation/ContactsInvitation'
import Layout2 from '../../components/Layouts/Layout2'

const Contacts = () => {
  return (
    <Layout2>
      <section className="flex justify-center p-8">
        <h2 className="text-3xl font-medium">Mes Contacts</h2>
      </section>
      <div className='flex flex-col sm:flex-row  gap-4 p-5 mb-20 sm:mb-0'>
        <ContactsList />
        <ContactsInvitation />
      </div>
    </Layout2>
  )
}

export default Contacts