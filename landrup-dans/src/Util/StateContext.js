import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loaded, setLoaded] = useState(false)

  const value = useMemo(() => ({ user, setUser, loaded, setLoaded }), [user, loaded])
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
