'use client';

import { Footer } from 'flowbite-react';

export default function DefaultFooter() {
  return (
    <Footer container className='fixed bottom-0'>
      <Footer.Copyright
        by="Rannan.io"
        href="#"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="/about">
          About
        </Footer.Link>
        <Footer.Link href="/legal">
          Mentions Légales
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}