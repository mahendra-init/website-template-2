import React from 'react'
import Card from './components/Card'
import Footer from './components/Footer'
import Formdiv from './components/Formdiv'
import Infodiv from './components/Infodiv'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="m-24 font-sans">
        <Navbar/>
        <Card/>
        <Infodiv/>
        <Formdiv/>
        <Footer/>
    </div>
  )
}

export default App