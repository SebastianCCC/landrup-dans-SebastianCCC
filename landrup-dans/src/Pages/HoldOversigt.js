import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RosterApi from '../Hooks/RosterApi'
import { StateContext } from '../Util/StateContext'

const HoldOversigt = () => {
  const { user } = useContext(StateContext)
  const { id } = useParams()
  const { rosterData } = RosterApi({ userId: user.userId, token: user.token, id })
  console.log(rosterData)
  return (
    <>
      {rosterData?.length ? (
        rosterData.map(({ firstname, lastname }, i) => {
          return (
            <p className="text-sm font-normal text-white" key={i}>
              {firstname} {lastname}
            </p>
          )
        })
      ) : (
        <h2 className="text-sm font-normal text-white">
          Det ser ud til at der ikke er nogen tilmeld...
        </h2>
      )}
    </>
  )
}

export default HoldOversigt
