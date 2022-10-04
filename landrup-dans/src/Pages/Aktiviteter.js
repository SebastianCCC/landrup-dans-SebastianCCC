import AktivitetKort from '../Components/Main/AktivitetKort'
import AktivitetApi from '../Hooks/AktivitetApi'

const Aktiviteter = () => {
  const { aktiviteter } = AktivitetApi({})
  return (
    <>
      <section className="flex flex-col">
        {aktiviteter &&
          aktiviteter.map(({ name, minAge, maxAge, asset, id }, i) => {
            return (
              <div className="even:py-[31px]" key={i}>
                <AktivitetKort name={name} age={`${minAge} - ${maxAge}`} img={asset.url} id={id} />
              </div>
            )
          })}
      </section>
    </>
  )
}

export default Aktiviteter
