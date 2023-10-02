import { Footer } from 'flowbite-react';


const FooterDefault = () => {
  return (
    <Footer container>
      <Footer.Copyright
        by="NeuroFantastic"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="/about">
          À propos
        </Footer.Link>
        <Footer.Link href="/legal">
          Mentions légales
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default FooterDefault