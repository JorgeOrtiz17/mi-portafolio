import Navbar from './components/Navbar' 
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 scroll-smooth overflow-x-hidden">
      <Navbar />
      <div id="home">
        <Hero />  
      </div>
      <Experience />
      <Skills />
      <Certifications />
      <Footer />
    </div>
  )
}

export default App