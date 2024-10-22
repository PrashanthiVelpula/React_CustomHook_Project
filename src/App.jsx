import React from 'react'
import FetchData from './Components/FetchData'
import FetchYogaData from './Components/FetchYogaData'
import "./App.css"

function App() {
  return (
 <>
 <div className='food'>Healthy Food API Data</div>
 <FetchData/>
 <div className='yoga'>Yoga Benefits API Data</div>
 <FetchYogaData/>
 </>
  )
}

export default App