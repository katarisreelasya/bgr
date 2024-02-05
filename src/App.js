import React from 'react'
import Navbar from './components/Navbar'
import Removebg from './components/Removebg'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="h-screen">
      <Removebg />
      </div>
      <Footer/>
    </div>
  );
}