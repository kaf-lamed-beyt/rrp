import React from 'react'
import svg from '../assets/react.png'


const App = () => {
  return (
    <div className="app__base">
      <div className="logo">
        <img src={svg} alt="reactjs logo" className="react logo" />
      </div>
      <h1>Welcome to rrp</h1>
      <p>Edit App.js file in the components folder to get started.</p>
    </div>
  )
}

export default App
