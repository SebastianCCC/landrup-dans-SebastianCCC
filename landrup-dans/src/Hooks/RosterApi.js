import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const RosterApi = ({ userId = '', method = 'GET', token = '', id = '' }) => {
  const [rosterData, setRosterData] = useState(null)

  const callback = (body) => {
    axios({
      method,
      headers: { Authorization: `Bearer ${token}` },
      url: `http://${process.env.REACT_APP_IP}/api/v1/users/${userId}/roster/${id}`,
      body: body || null,
    }).then((res) => {
      setRosterData(res.data)
    })
  }

  useEffect(() => {
    callback()
  }, [id, token, method])

  return { rosterData, callback }
}

export default RosterApi
