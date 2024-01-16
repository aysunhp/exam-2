import React from 'react'
import Hero  from '../../components/hero'
import OurServices from '../../components/services'
import Testimonials from '../../components/testimaonials'
import Welcome from '../../components/welcome'
import OurMenu from '../ourMenu'
const Home = () => {
  return (
<>
<Hero/>
<Welcome/>
<Testimonials/>
<OurServices/>
<OurMenu/>
</>
  )
}

export default Home