import { Link } from 'react-router-dom'

const Button = ({ title, link, register }) => {
  return (
    <Link className="w-[65%]" to={link}>
      <button
        onClick={register && register}
        className={`${
          title === 'Log ind' && 'border border-secondary bg-secondary/50'
        }  w-full px-4 py-3 text-center drop-shadow-button bg-secondary rounded-xl text-primary text-sm font-light`}
      >
        {title}
      </button>
    </Link>
  )
}

export default Button
