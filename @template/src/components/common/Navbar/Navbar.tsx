import Image from "next/image"
import Link from "next/link"
import NavbarMenu from "./Menu"

interface NavbarProps {
  logo: {
    url: string
    alt: string
  }
  menu: {
    alias: string
    url: string
    target?: string
    submenu?: {
      alias: string
      url: string
      target?: string
    }[]
  }[]
  endbutton: {
    alias: string
    url: string
    target?: string
  }
}

export default function Navbar ({logo, menu, endbutton}:NavbarProps){
    return (
        <header className='header'>
            <div className='header__wrapper is-large'>
                <div className='header__logo'>
                    {logo && (
                      <Link href='/' legacyBehavior>
                        <a>
                          <Image src={logo.url} alt={logo.alt} width={100} height={21} />
                        </a>
                      </Link>
                    )}
                  </div>
                    <div className='header__menu'>
                      <NavbarMenu menu={menu}/>
                    </div>
                    {
                      endbutton &&
                      <div className='header__end'>
                        <a href={endbutton.url} className='header__end-button'>{endbutton.alias}</a>
                      </div>
                    }
            </div>
        </header>
    )
}
