import { useState, useContext, useEffect } from 'react'
import KalenderKort from '../Components/Main/KalenderKort'
import LandrupApiUser from '../Hooks/LandrupApiUser'
import AktivitetApi from '../Hooks/AktivitetApi'
import { StateContext } from '../Util/StateContext'

const Kalender = () => {
  const { user } = useContext(StateContext)
  const [filteredKalender, setFilteredKalender] = useState([])
  const { aktiviteter } = AktivitetApi({})
  const { userData } = LandrupApiUser({ id: user.userId, token: user.token })
  console.log(filteredKalender)

  useEffect(() => {
    setFilteredKalender(
      aktiviteter &&
        aktiviteter.filter((singleAktivitet) => singleAktivitet.instructorId === user.userId)
    )
  }, [aktiviteter])
  return (
    <>
      {filteredKalender?.length || userData?.activities?.length ? (
        <section className="flex flex-col">
          {user.role == 'instructor' &&
            filteredKalender.map(({ name, weekday, time, id }, i) => {
              return (
                <KalenderKort
                  key={i}
                  title={name}
                  decs={`${weekday} ${time}`}
                  id={id}
                  role={user.role}
                />
              )
            })}
          {user.role == 'default' &&
            userData.activities.map(({ name, weekday, time, id }, i) => {
              return <KalenderKort key={i} title={name} decs={`${weekday} ${time}`} id={id} />
            })}
        </section>
      ) : (
        <h2 className="text-sm font-normal text-white">
          Det ser ud til du ikke har nogen planer...
        </h2>
      )}
    </>
  )
}

export default Kalender
