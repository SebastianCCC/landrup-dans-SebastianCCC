import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  let { pathname } = useLocation()
  const title = pathname.replace('/', '').replace('-', ' ').replace('sog', 'søg')
  const aktiviteterID = !title.includes('aktiviteter/')
  return (
    <div className="w-mobile">
      <main className={`${aktiviteterID && title && 'p-page'}`}>{children}</main>
      {title && title !== 'log ind' && (
        <header className="fixed w-mobile bottom-0 z-20">
          <div>hey</div>
        </header>
      )}
    </div>
  )
}

export default Layout
