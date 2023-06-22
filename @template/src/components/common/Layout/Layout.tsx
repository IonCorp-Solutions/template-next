import { Footer, Head, Navbar } from "@components/common"
import { ReactNode } from 'react'
interface LayoutProps {
  children: ReactNode;
}


const menu = [
    {
      alias: 'Home',
      url: '/',
      target: '_blank',
    },
    {
      alias: 'About',
      url: '/about',
      target: '_blank',
    },
    {
      alias: 'Contact',
      url: '/contact',
      target: '_blank',
      submenu: [
        {
          alias: 'Contact 1',
          url: '/contact-1',
          target: '_blank',
        },
        {
          alias: 'Contact 2',
          url: '/contact-2',
          target: '_blank',
        },
      ],
    },
  ]

const logo = {
  url: '/assets/logo.svg',
  alt: 'Logo',
}

const endbutton = {
  alias: 'End Button',
  url: '/end-button',
  target: '_blank',
}


export default function Layout({ children }: LayoutProps) {

  return (
    <>
      <Head />
      <Navbar menu={menu} logo={logo} endbutton={endbutton}/>
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}
