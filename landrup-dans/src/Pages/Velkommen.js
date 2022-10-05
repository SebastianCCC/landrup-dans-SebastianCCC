import splashImage from '../Assets/Images/splash-image.jpg'
import { Logo } from '../Assets'
import Button from '../Components/Main/Button'

const Velkommen = () => {
  return (
    <div className="grid h-screen grid-rows-2 relative">
      <div className="row-start-1 row-end-3 col-span-full flex justify-center overflow-hidden">
        <img className="object-cover" src={splashImage} />
      </div>
      <div className="row-start-2 row-end-3 col-span-full">
        <Logo />
      </div>
      <div className="flex flex-col justify-end items-center row-start-1 row-end-3 col-span-full py-[53px]">
        <Button title="Kom i gang" link="/aktiviteter" />
      </div>
    </div>
  )
}

export default Velkommen
