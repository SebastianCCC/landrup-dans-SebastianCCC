import { useState } from 'react'
import AktivitetApi from '../Hooks/AktivitetApi'
import { Link } from 'react-router-dom'
import { SogIcon } from '../Components/Main/Assets'
import AktivitetKort from '../Components/Main/AktivitetKort'

const Sog = () => {
  const [filteredAktiviteter, setFilteredAktiviteter] = useState([])
  const [searchValue, setsearchValue] = useState('')
  const { aktiviteter } = AktivitetApi({})
  console.log(aktiviteter)

  const aktivitetFilter = ({ target }) => {
    setsearchValue(target.value.toLocaleLowerCase())
    setFilteredAktiviteter(
      aktiviteter.filter(
        (singleAktivitet) =>
          singleAktivitet.name.toLocaleLowerCase().includes(searchValue) ||
          singleAktivitet.description.toLocaleLowerCase().includes(searchValue) ||
          singleAktivitet.weekday.toLocaleLowerCase().includes(searchValue) ||
          singleAktivitet.time.toLocaleLowerCase().includes(searchValue)
      )
    )
  }
  return (
    <div>
      <form className="flex items-center pr-3 bg-[#7D5B75] w-full">
        <input
          className="text-white w-full p-3 bg-transparent outline-none"
          type="text"
          value={searchValue}
          onChange={aktivitetFilter}
        />
        <SogIcon />
      </form>
      {searchValue !== '' && (
        <div className="relative">
          <section className="absolute left-0 top-0 w-full bg-[#7D5B75] border-primary border-t z-10 p-[13px]">
            {filteredAktiviteter.length > 0 ? (
              filteredAktiviteter.map(({ name, description, asset, id }, i) => {
                return (
                  <div className="even:py-[13px]" key={i}>
                    <Link to={`/aktiviteter/${id}`}>
                      <div className="flex items-center">
                        <div className="w-[80px] h-[80px] overflow-auto rounded-2xl">
                          <img className="w-full h-full object-cover" src={asset.url} />
                        </div>
                        <div className="leading-none px-page text-white">
                          <h2 className="font-normal pb-2">{name}</h2>
                          <p className="font-light">{description.slice(0, 22) + '...'}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            ) : (
              <p className="font-normal text-white">
                Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.
              </p>
            )}
          </section>
        </div>
      )}
      <section className="flex flex-col mt-[55px]">
        {aktiviteter &&
          aktiviteter.map(({ name, minAge, maxAge, asset, id }, i) => {
            return (
              <div className="even:py-[31px]" key={i}>
                <AktivitetKort name={name} age={`${minAge} - ${maxAge}`} img={asset.url} id={id} />
              </div>
            )
          })}
      </section>
    </div>
  )
}

export default Sog
