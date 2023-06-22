import cn from 'clsx'
import Link from 'next/link'

interface Props {
  alias: string
  url: string
  target?: string
  isSubItem?: boolean
}


const NavbarMenuItem = ({ alias, url, target, isSubItem = false }: Props) => {
  const linkStyle = cn(
    'header__options-link',
    { 'is-subitem': isSubItem }
  )

  return (
    <li className='header__options-item'>
      <Link href={url} legacyBehavior>
        <a className={linkStyle} target={target}>
          {alias}
        </a>
      </Link>
    </li>
  )
}

export default NavbarMenuItem
