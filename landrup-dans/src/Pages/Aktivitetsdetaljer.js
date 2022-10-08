import AktivitetApi from '../Hooks/AktivitetApi'
import LandrupApiUser from '../Hooks/LandrupApiUser'
import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../Components/Main/Button'
import { StateContext } from '../Util/StateContext'
import { useCookies } from 'react-cookie'

const Aktivitetsdetaljer = () => {
  const [cookies] = useCookies(['user'])
  const { user, setLoaded } = useContext(StateContext)
  const { id } = useParams()
  const { aktiviteter } = AktivitetApi({ id })
  const { userData } = LandrupApiUser({ id: cookies.user?.userId, token: cookies.user?.token })
  const SignedUp = userData && userData.activities.some((aktivitet) => aktivitet.id == id)
  let navigate = useNavigate()

  const SignUpForAktivitet = () => {
    setLoaded(true)
    fetch(
      `http://${process.env.REACT_APP_IP}/api/v1/users/${cookies.user.userId}/activities/${id}`,
      {
        method: SignedUp ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.user.token}`,
        },
      }
    )
      .then((response) => (SignedUp ? response.text() : response.json()))
      .then(() => {
        setTimeout(() => {
          setLoaded(false)
          navigate('/kalender', { replace: true })
        }, 2000)
      })
      .catch(() => {
        setLoaded(false)
      })
  }
  return (
    <>
      {aktiviteter && (
        <>
          <div className="relative grid min-h-[489px]">
            <img
              className="absolute w-full h-full object-cover"
              src={aktiviteter.asset.url}
              alt=""
            />
            <div className="relative flex flex-col justify-end items-end pr-page pb-page">
              {cookies.user?.token ? (
                <>
                  {userData?.age >= aktiviteter?.minAge &&
                    userData?.age <= aktiviteter?.maxAge &&
                    cookies.user.role !== 'instructor' && (
                      <Button
                        title={`${SignedUp ? 'Forlad' : 'Tilmeld'}`}
                        register={SignUpForAktivitet}
                      />
                    )}
                </>
              ) : (
                <Button title="Log ind" link="/log-ind" />
              )}
            </div>
          </div>
          <div className="text-white px-page pt-[18px] leading-tight">
            <h2 className="text-base font-normal">{aktiviteter.name}</h2>
            <p className="text-sm font-light">
              {aktiviteter.minAge + ' - ' + aktiviteter.maxAge + ' år'}
            </p>
            <p className="text-sm font-light pt-[10px]">{aktiviteter.description}</p>
            <p className="text-sm pt-page">{aktiviteter.time + ' - ' + aktiviteter.weekday}</p>
          </div>
        </>
      )}
    </>
  )
}

export default Aktivitetsdetaljer
