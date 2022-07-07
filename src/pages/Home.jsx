import React from 'react'
import Onlayn from '../components/Onlayn/Onlayn'
import OptimalMeslehetler from '../components/OptimalMeslehetler/OptimalMeslehetler'
import Product from '../components/Product/Product'
import SliderPhoto from '../components/SliderPhoto/SliderPhoto'
import Vestel from '../components/Vestel/Vestel'

const Home = () => {
  return (
    <div>
        <SliderPhoto/>
        <Vestel/>
        <Product/>
        <Onlayn/>
        <OptimalMeslehetler/>
    </div>
  )
}

export default Home