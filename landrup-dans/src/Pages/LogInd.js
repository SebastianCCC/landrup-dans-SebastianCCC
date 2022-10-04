import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schema } from '../schema/LoginSchema'
import { useLocation } from 'react-router-dom'
import splashImage from '../Assets/Images/splash-image.jpg'
import Button from '../Components/Main/Button'
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { StateContext } from '../Util/StateContext'

const Logind = () => {
  const { user, setUser, setLoaded } = useContext(StateContext)
  console.log(user)
  const [err, setErr] = useState(null)
  let { pathname } = useLocation()
  let navigate = useNavigate()
  const title = pathname.replace('/', '').replace('-', ' ')
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
        setUser(data)
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

  useEffect(() => {
    if (Boolean(Object.keys(user).length)) navigate(-1, { replace: true })
  }, [])

  return (
    <div className="relative h-screen pb-16">
      <div className="absolute h-full">
        <img className="h-full object-cover" src={splashImage} />
      </div>
      <div className="relative h-full flex flex-col justify-center items-center py-[53px]">
        <div className="w-[80%]">
          <h1 className="text-[48px] text-white font-normal">{title}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className={`mt-[10px] mb-[15px] ${errors.username && 'border border-red-800'} w-full`}
            >
              <input
                className="w-full p-3 outline-none"
                placeholder="brugernavn"
                type="text"
                {...register('username')}
              />
            </div>
            <div className={`mb-[15px] ${errors.password && 'border border-red-800'} w-full`}>
              <input
                className="w-full p-3 outline-none"
                placeholder="adgangskode"
                type="password"
                {...register('password')}
              />
            </div>
            {(Boolean(Object.keys(errors).length) || err) && (
              <p className="w-full select-none mb-4">
                {errors.username?.message ||
                  errors.password?.message ||
                  (err && 'Wrong password or username')}
              </p>
            )}
            <div className="w-[75%] m-auto mt-[30px]">
              <button className="button">{title}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Logind
