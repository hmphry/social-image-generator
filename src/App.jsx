import { useState } from 'react'
import './App.css'

import Frame from './components/Frame'

function App() {

  return (
    <div className='grid grid-cols-1 gap-4 bg-slate-950'>
      <Frame />
      <Frame />
      <Frame />
    </div>
  )
}

export default App
