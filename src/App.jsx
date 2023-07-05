import { useEffect, useState } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Header from './components/header/Header'
import Body from './components/body /Body'
import Footer from './components/footer/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 1000
    })
  },[])
  return (
    <div className='container'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
