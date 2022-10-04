import { Link } from 'react-router-dom'

const AktivitetKort = ({ name, age, img, id }) => {
  return (
    <div className="relative rounded-l-[40px] rounded-tr-[40px] overflow-hidden min-h-[350px]">
      <Link to={`/aktiviteter/${id}`}>
        <img className="absolute w-full h-full object-cover" src={img} />
        <div className="absolute w-full h-[29%] bottom-0 p-[23px] px-[25px] bg-ternary rounded-tr-[45px] text-sm font-normal opacity-80">
          <h2>{name}</h2>
          <p>{age} år</p>
        </div>
      </Link>
    </div>
  )
}

export default AktivitetKort
