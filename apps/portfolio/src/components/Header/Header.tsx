import { Inline } from '@ui'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'

const navigation = [
  { path: '/', title: 'Home' },
  { path: '/resume', title: 'Resume' },
  { path: '/projects', title: 'Projects' },
]

export const Header = () => {
  const pathname = usePathname()

  return (
    <Inline align="space-between" alignY="center">
      <div></div>
      <nav>
        <Inline>
          {navigation.map(({ path, title }, index) => (
            <NavItem key={index} path={path} title={title} isActive={pathname === path} />
          ))}
        </Inline>
      </nav>
      <div>{/* <Icon name="add" /> */}</div>
    </Inline>
  )
}
