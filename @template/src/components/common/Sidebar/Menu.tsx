import Item from "./Item"

interface MenuProps {
  menu: []
}

export default function Menu ({menu}:MenuProps){
  return (
    <nav className='sidevar-nav'>
      <ul className='side-nav__items'>
        {menu.map((item,index) => (
          <Item item={item} key={index} />
        ))}
      </ul>
    </nav>
  )
}
