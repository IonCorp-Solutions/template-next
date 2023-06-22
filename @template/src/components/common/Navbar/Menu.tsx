import NavbarMenuItem from "./MenuItem"
import NavbarSubMenu from "./SubMenu"

interface Props {
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
}




const NavbarMenu = ({ menu }:Props) => {
  const hasSubMenu = (submenu: any) => submenu && submenu.length > 0
  return (
    <ul className='header__options'>
      {menu.map((item) => (
        hasSubMenu(item?.submenu)
          ? <NavbarSubMenu key={item.alias} {...item} />
          : <NavbarMenuItem key={item.alias} {...item} />
      ))}
    </ul>
  )
}

export default NavbarMenu
