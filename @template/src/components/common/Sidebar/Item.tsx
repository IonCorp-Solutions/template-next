import { getTargetLink, isEmpty } from '@lib/utils'
import Link from 'next/link'

interface ItemProps {
  item: {
    alias: string
    url: string
    target?: string
  }
  scrollTo?: (id: string) => void
}


export default function Item({item, scrollTo}:ItemProps) {
  const isSelf = item.url.indexOf('#') === 0 && typeof scrollTo === 'function'
  return (
    <li className='sidebar-nav__item'>
      {
        isSelf
          ? (
            <a className='sidebar-nav__link' onClick={() => scrollTo(item.url)}>
              {item.alias}
            </a>
            )
          : (
            <Link href={!isEmpty(item.url) ? item.url : '#'}>
              <a className='sidebar-nav__link' target={getTargetLink(item.target)}>
                {item.alias}
              </a>
            </Link>
            )
      }
    </li>
  )
}
