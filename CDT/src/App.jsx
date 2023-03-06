import { useState } from 'react'
import Navbar from './components/navbar'
import Gallery from './components/gallery'
import Footer from './components/footer'
import Content from './components/content'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Content />
      <Gallery />
      <Footer />
    
    

    </div>
  )
}

export default App
