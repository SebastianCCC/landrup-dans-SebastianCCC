import { Link } from 'react-router-dom'
import { HomeIcon, SogIcon, kalenderIcon } from './Assets'

const Tab = () => {
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
      link: '/kalender',
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
