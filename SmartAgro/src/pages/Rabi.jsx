import RabiCropsCard from '../components/RabiCropsCard'

const Rabi = () => {
  return (
   <section className='w-full bg-green-100 flex flex-col items-center py-30 px-4' aria-labelledby="rabi-heading">
    <h1 id="rabi-heading" className='text-5xl font-bold text-center text-green-800'>Guide to Rabi Season Crops (Winter Crops)</h1>
    <p className='text-lg text-gray-700 max-w-2xl text-center mt-6'>Sown in Winter ( Oct-Dec ) | Harvested in Spring (Mar-Apr)</p>
    <RabiCropsCard />
   </section>
  )
}

export default Rabi
