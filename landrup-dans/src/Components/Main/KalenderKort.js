import { Link } from 'react-router-dom'

const KalenderKort = ({ title, decs, id, role }) => {
  return (
    <Link
      className="even:my-[30px]"
      to={role ? `/kalender/${id}?name=${title}` : `/aktiviteter/${id}`}
    >
      <article className="bg-primary rounded-xl px-[33px] py-[20px] leading-tight">
        <h2 className="font-normal text-lg">{title.slice(0, 14) + '...'}</h2>
        <p className="font-normal capitalize text-sm">{decs}</p>
      </article>
    </Link>
  )
}

export default KalenderKort
