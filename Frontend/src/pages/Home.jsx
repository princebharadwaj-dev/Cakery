import React from 'react'
import Nav from '../components/Nav'
import LeftSide from '../components/LeftSide'
import Welcome from '../components/Welcome'
import AboutSection from '../components/AboutSection'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Product from './Products'


const Home = () => {
  return (
    <div>
      <Nav />
      <LeftSide />
      <Welcome />
      <AboutSection />
      <Product />
      <Footer />
      

    </div>
  )
}

export default Home
