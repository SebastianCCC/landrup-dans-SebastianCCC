import { Link } from 'react-router-dom'

const KalenderKort = ({ title, decs, id, role }) => {
  return (
    <Link to={role ? `/kalender/${id}` : `/aktiviteter/${id}`}>
      <article className="bg-primary rounded-xl px-[33px] py-[20px] leading-tight">
        <h2 className="font-normal text-lg">{title.slice(0, 16) + '...'}</h2>
        <p className="font-normal capitalize text-sm">{decs}</p>
      </article>
    </Link>
  )
}

export default KalenderKort
