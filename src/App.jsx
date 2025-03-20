import { useEffect, useState } from 'react'
import Header from './components/header'
import HomePage from './pages/homePage'
import Footer from './components/footer'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
 
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Header/>
      <HomePage/>
      <Footer/>
    </>
  )
}

export default App
