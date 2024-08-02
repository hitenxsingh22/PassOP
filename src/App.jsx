import { useState } from 'react' 
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'



function App() { 

  return (
    <>
      <ErrorBoundary>

        <Navbar /> 
        <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

       <Manager/> 
        </div>
       <Footer/>
      </ErrorBoundary>
    </>
  )
}

export default App