import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import PageNotFound from './views/PageNotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import News from './views/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/news' element={<News />} />
      <Route path='*' element={<PageNotFound />} />
  </Routes>
    
    </BrowserRouter>
  )
}

export default App
