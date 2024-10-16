import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
// import Contactpage from './contact/Contactpage'

const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          {/* <Route path='/contact' element={<Contactpage />} />  */}
        </Routes>
      </div>
    </>
  )
}

export default App
