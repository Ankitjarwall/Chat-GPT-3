import React from 'react'
import { Brand, CTA, Navbar } from './Components'
import { Footer, Blog, Posibility, Features, Whatgpt3, Header } from './container'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />  
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

