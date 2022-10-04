import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const AktivitetApi = ({ id = '', method = 'GET' }) => {
  const [aktiviteter, setAktiviteter] = useState(null)

  const callback = (body) => {
    axios({
      method,
      url: `http://${process.env.REACT_APP_IP}/api/v1/activities/${id ? id : ''}`,
      body: body || null,
    }).then((res) => {
      setAktiviteter(res.data)
    })
  }

  useEffect(() => {
    callback()
  }, [method])

  return { aktiviteter, callback }
}

export default AktivitetApi
