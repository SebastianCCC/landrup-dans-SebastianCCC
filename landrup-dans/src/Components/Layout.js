import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Tab from './Header/Tab'

const Layout = ({ children }) => {
  let { pathname } = useLocation()
  const title = pathname.replace('/', '').replace('-', ' ').replace('sog', 'søg')
  const aktiviteterID = !title.includes('aktiviteter/')
  return (
    <div className="w-mobile h-screen overflow-auto bg-secondary">
      <main className={`${aktiviteterID && title && 'p-page pb-24'}`}>
        {aktiviteterID && title && title !== 'log ind' && (
          <h1 className="pb-page text-lg text-primary font-normal capitalize">{title}</h1>
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
