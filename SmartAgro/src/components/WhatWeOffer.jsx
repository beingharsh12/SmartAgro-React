import React from 'react'
import WhatWeOfferCard from './WhatWeOfferCard'

const WhatWeOffer = () => {
  return (
     <section className="bg-green-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-green-800">What We Offer</h2>
        </div>
        <div>
            <WhatWeOfferCard />
        </div>
    </section>
  )
}

export default WhatWeOffer