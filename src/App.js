import React from 'react'
import './App.css'
import Palette from './components/Palette'
import seedPalettes from './seedPalettes'

function App() {
  return (
    <div className="app">
      <Palette {...seedPalettes[1]} />
    </div>
  )
}

export default App
