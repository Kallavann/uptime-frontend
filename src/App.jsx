import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import ResumeUpload from './components/ResumeUpload'
import Planos from './components/Planos'

function App() {
  return (
    <BrowserRouter>
    <div className="bg-gray-950 text-white min-h-screen">
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/planos" element={<Planos/>}/>
          <Route path="/contato" element={<ContactForm/>}/>
          <Route path="/curriculo" element={<ResumeUpload/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App