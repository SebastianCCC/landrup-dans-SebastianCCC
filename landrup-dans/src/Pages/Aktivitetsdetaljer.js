import AktivitetApi from '../Hooks/AktivitetApi'
import { useParams } from 'react-router-dom'
import Button from '../Components/Main/Button'

const Aktivitetsdetaljer = () => {
  const { id } = useParams()
  const { aktiviteter } = AktivitetApi({ id })
  console.log(aktiviteter)
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
              <Button title="Tilmeld" />
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
