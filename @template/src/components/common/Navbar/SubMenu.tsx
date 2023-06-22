import useHoverDirty from '@lib/hooks/useHoverDirty'
import cn from 'clsx'
import Link from 'next/link'
import { useRef } from "react"
import NavbarMenuItem from "./MenuItem"

interface Props {
  alias: string
  url: string
  target?: string
  submenu?: {
    alias: string
    url: string
    target?: string
  }[]
}

const NavbarSubMenu = ({ alias,url,target ,submenu }:Props) => {
  const linkRef = useRef()
  const isHovering = useHoverDirty(linkRef)

  const linkStyle = cn(
    'header__options-link',
    'has-submenu',
    { 'is-active': isHovering }
  )
  const subMenuStyle = cn(
    'header__options-submenu',
    { 'is-active': isHovering }
  )
  return (
    <li className='header__options-item has-submenu'>
      <Link href={url} legacyBehavior>
        <a className={linkStyle} target={target}>
          {alias}
        </a>
      </Link>
      <ul className={subMenuStyle}>
        {submenu && submenu.map((item) => (
          <NavbarMenuItem key={item.alias} isSubItem {...item} />
        ))}
      </ul>
    </li>
  )
}

export default NavbarSubMenu
