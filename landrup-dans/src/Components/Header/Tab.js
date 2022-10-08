import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, SogIcon, kalenderIcon } from './Assets'
import { StateContext } from '../../Util/StateContext'
import { useCookies } from 'react-cookie'

const Tab = () => {
  const [cookies] = useCookies(['user'])

  const NavigationTab = [
    {
      link: '/aktiviteter',
      Icon: HomeIcon,
    },
    {
      link: '/sog',
      Icon: SogIcon,
    },
    {
      link: cookies.user ? '/kalender' : '/log-ind',
      Icon: kalenderIcon,
    },
  ]
  return (
    <nav>
      <ul className="flex justify-between pb-[10px] pt-[15px] px-page bg-primary drop-shadow-tab">
        {NavigationTab.map(({ link, Icon }, i) => {
          return (
            <Link key={i} to={link}>
              <Icon />
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default Tab
