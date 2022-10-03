import { Link } from 'react-router-dom'

const Button = ({ title, link }) => {
  return (
    <Link className="w-[60%]" to={link}>
      <button className="button">{title}</button>
    </Link>
  )
}

export default Button
