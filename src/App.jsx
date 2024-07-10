import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='overflow-x-hidden text-neutral-100 selection:bg-[#ff014f] selection:text-black' style={{fontFamily:"Montserrat"}}>
      <div className="fixed h-screen w-screen bg-[#212428] -z-10"></div> 
        <Navbar />
        <Hero />
        <Technologies />
        <Education />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
