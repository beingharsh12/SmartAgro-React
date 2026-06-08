import KharifCropsCard from '../components/KharifCropsCard'

const Kharif = () => {
  return (
     <section className='w-full bg-green-100 flex flex-col items-center py-30 px-4' aria-labelledby="kharif-heading">
    <h1 id="kharif-heading" className='text-5xl font-bold text-center text-green-800'>Guide to Kharif Season Crops (Summer Crops)</h1>
    <p className='text-lg text-gray-700 max-w-2xl text-center mt-6'>Sown in Summer ( June-Jul ) | Harvested in Autumn (Sep-Oct)</p>
    <KharifCropsCard />
   </section>
  )
}

export default Kharif
