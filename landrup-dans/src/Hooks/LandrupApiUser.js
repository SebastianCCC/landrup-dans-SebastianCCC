import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const LandrupApiUser = ({ id = '', method = 'GET', token = '' }) => {
  const [userData, setUserData] = useState(null)

  const callback = (body) => {
    axios({
      method,
      headers: { Authorization: `Bearer ${token}` },
      url: `http://${process.env.REACT_APP_IP}/api/v1/users/${id ? id : ''}`,
      body: body || null,
    }).then((res) => {
      setUserData(res.data)
    })
  }

  useEffect(() => {
    callback()
  }, [id, token, method])

  return { userData, callback }
}

export default LandrupApiUser
