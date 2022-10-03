import { Routes, Route } from 'react-router-dom'
import Aktiviteter from './Pages/Aktiviteter'
import Aktivitetsdetaljer from './Pages/Aktivitetsdetaljer'
import Sog from './Pages/Sog'
import Kalender from './Pages/Kalender'
import HoldOversigt from './Pages/HoldOversigt'
import LogInd from './Pages/LogInd'
import Velkommen from './Pages/Velkommen'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Velkommen />} />
        <Route path="aktiviteter" element={<Aktiviteter />} />
        <Route path="aktiviteter/:id" element={<Aktivitetsdetaljer />} />
        <Route path="sog" element={<Sog />} />
        <Route path="kalender" element={<Kalender />} />
        <Route path="kalender/:id" element={<HoldOversigt />} />
        <Route path="log-ind" element={<LogInd />} />
      </Routes>
    </>
  )
}

export default App
