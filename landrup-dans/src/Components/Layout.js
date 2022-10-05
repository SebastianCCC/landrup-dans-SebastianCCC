import { useContext, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Tab from './Header/Tab'
import { StateContext } from '../Util/StateContext'
import { LoadingSpinner } from '../Assets'

const Layout = ({ children }) => {
  const { loaded } = useContext(StateContext)
  let { pathname } = useLocation()
  let [searchParams] = useSearchParams()
  const name = searchParams.get('name')
  const title = pathname.replace('/', '').replace('-', ' ').replace('sog', 'søg')
  const aktiviteterID = !title.includes('aktiviteter/')
  return (
    <div className="w-mobile h-screen overflow-auto bg-secondary">
      {loaded && (
        <div className="fixed flex flex-col justify-center items-center top-0 h-screen bg-additional/70 w-mobile z-30 text-white">
          <LoadingSpinner />
        </div>
      )}
      <main className={`${aktiviteterID && title && title !== 'log ind' && 'p-page pb-24'}`}>
        {aktiviteterID && title && title !== 'log ind' && (
          <h1
            className={`${
              title === 'søg' ? 'pb-[13px]' : 'pb-page'
            } text-lg text-primary font-normal capitalize`}
          >
            {name ? name.slice(0, 18) + '...' : title}
          </h1>
        )}
        {children}
      </main>
      {title && title !== 'log ind' && (
        <header className="fixed w-mobile bottom-0 z-20">
          <Tab />
        </header>
      )}
    </div>
  )
}

export default Layout
