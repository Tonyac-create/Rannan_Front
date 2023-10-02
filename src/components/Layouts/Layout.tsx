import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout(props: any) {
  return (
    <>
         <Header />
            {props.children}
         <Footer />
    </>
  )
}

export default Layout