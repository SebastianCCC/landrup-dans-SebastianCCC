import { useState, useContext, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import KalenderKort from '../Components/Main/KalenderKort'
import LandrupApiUser from '../Hooks/LandrupApiUser'
import AktivitetApi from '../Hooks/AktivitetApi'
import { StateContext } from '../Util/StateContext'
import { useCookies } from 'react-cookie'

const Kalender = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { setLoaded } = useContext(StateContext)
  const [filteredKalender, setFilteredKalender] = useState([])
  const { aktiviteter } = AktivitetApi({})
  const { userData } = LandrupApiUser({ id: cookies.user?.userId, token: cookies.user?.token })
  let navigate = useNavigate()

  useEffect(() => {
    setFilteredKalender(
      aktiviteter &&
        aktiviteter.filter(
          (singleAktivitet) => singleAktivitet.instructorId === cookies.user?.userId
        )
    )
  }, [aktiviteter])
  return (
    <>
      {filteredKalender?.length || userData?.activities?.length ? (
        <section className="flex flex-col">
          {cookies.user.role == 'instructor' &&
            filteredKalender.map(({ name, weekday, time, id }, i) => {
              return (
                <KalenderKort
                  key={i}
                  title={name}
                  decs={`${weekday} ${time}`}
                  id={id}
                  role={cookies.user.role}
                />
              )
            })}
          {cookies.user.role == 'default' &&
            userData.activities.map(({ name, weekday, time, id }, i) => {
              return <KalenderKort key={i} title={name} decs={`${weekday} ${time}`} id={id} />
            })}
        </section>
      ) : (
        <h2 className="text-sm font-normal text-white">
          {cookies.user ? 'Det ser ud til du ikke har nogen planer...' : 'Du er ikke logget ind...'}
        </h2>
      )}
      {cookies.user ? (
        <button
          onClick={() => {
            setLoaded(true)
            setTimeout(() => {
              setLoaded(false)
              navigate('/aktiviteter', { replace: true })
              removeCookie('user')
            }, 1000)
          }}
          className="w-fit fixed bottom-16 left-0 text-right p-[15px] px-[25px] m-[28px] text-sm bg-primary rounded-xl drop-shadow-tab"
        >
          Log ud
        </button>
      ) : (
        <Link to="/log-ind">
          <button className="w-fit fixed bottom-16 left-0 text-right p-[15px] px-[25px] m-[28px] text-sm bg-primary rounded-xl drop-shadow-tab">
            Log ind
          </button>
        </Link>
      )}
    </>
  )
}

export default Kalender
