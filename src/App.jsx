import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gif from './pages/Gif'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gif' element={<Gif />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
