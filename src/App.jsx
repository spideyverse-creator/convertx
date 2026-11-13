import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import ConverterSection from './sections/ConverterSection'
import FormatsGrid from './sections/FormatsGrid'
import HowItWorks from './sections/HowItWorks'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div id="top" style={{ minHeight: '100vh', backgroundColor: '#05050a', color: 'white', position: 'relative', overflow: 'hidden' }}>
      
      {/* BACKGROUND ANIMATED IMAGE */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 0,
      }}>
        <div 
          className="bg-animated-image"
          style={{
            position: 'absolute',
            top: '-5%', left: '-5%', right: '-5%', bottom: '-5%', // Thoda bada taaki zoom hone par edges na dikhein
            backgroundImage: 'url("https://images.pexels.com/photos/33978450/pexels-photo-33978450.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(5, 5, 10, 0.6), rgba(5, 5, 10, 0.85))',
        }} />
      </div>

      {/* SLOW MOVING GLOWING ORB */}
      <div className="bg-orb" />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <Hero />
        <ConverterSection />
        <FormatsGrid />
        <HowItWorks />
        <ContactSection />
      </div>
    </div>
  )
}

export default App