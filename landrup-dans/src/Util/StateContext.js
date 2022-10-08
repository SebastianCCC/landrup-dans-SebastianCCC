import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false)

  const value = useMemo(() => ({ loaded, setLoaded }), [loaded])
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
