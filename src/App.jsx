import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
        <Header />
        <div style={{display: "flex"}}>
          <Sidebar />
          <Body/>
        </div>
        <Footer />
    </div>
  )
}

export default App