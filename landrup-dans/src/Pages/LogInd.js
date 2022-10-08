import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schema } from '../schema/LoginSchema'
import { useLocation } from 'react-router-dom'
import splashImage from '../Assets/Images/splash-image.jpg'
import Button from '../Components/Main/Button'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StateContext } from '../Util/StateContext'
import { useCookies } from 'react-cookie'

const Logind = () => {
  const [cookies, setCookie] = useCookies(['user'])
  const { setLoaded } = useContext(StateContext)
  const [err, setErr] = useState(null)
  let { pathname } = useLocation()
  let navigate = useNavigate()
  const title = pathname.replace('/', '').replace('-', ' ')
  const toUpperCase = title.slice(0).charAt(0).toUpperCase() + title.slice(1)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    setLoaded(true)
    fetch(`http://${process.env.REACT_APP_IP}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoaded(false)
        setCookie('user', data)
        navigate(-1, { replace: true })
      })
      .catch(() => {
        setLoaded(false)
        setErr(true)
        setTimeout(() => {
          setErr(false)
        }, 5000)
      })
    reset()
  }

  return (
    <div className="relative h-screen pb-16">
      <div className="absolute h-full">
        <img className="h-full object-cover" src={splashImage} />
      </div>
      <div className="absolute flex flex-col justify-center w-full h-full pb-20">
        <div className="absolute -skew-y-[27deg] w-full h-[65%] bg-secondary/50"></div>
      </div>
      <div className="relative h-full flex flex-col justify-center items-center py-[53px]">
        <div className="w-[80%]">
          <h1 className="text-[48px] text-white font-normal">{toUpperCase}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`mt-[10px] mb-[15px] ${errors.username && 'bg-secondary pl-6'} w-full`}>
              <input
                className="w-full p-3 outline-none"
                placeholder="brugernavn"
                type="text"
                {...register('username')}
              />
            </div>
            <div className={`mb-[15px] ${errors.password && 'bg-secondary pl-6'} w-full`}>
              <input
                className="w-full p-3 outline-none"
                placeholder="adgangskode"
                type="password"
                {...register('password')}
              />
            </div>
            {(Boolean(Object.keys(errors).length) || err) && (
              <p className="w-full select-none mb-4 text-white">
                {errors.username?.message ||
                  errors.password?.message ||
                  (err && 'Forkert brugernavn eller adgangskode')}
              </p>
            )}
            <div className="w-[75%] m-auto mt-[30px]">
              <button className="w-full px-4 py-3 text-center drop-shadow-button bg-secondary rounded-xl text-primary text-sm font-light">
                {toUpperCase}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Logind
