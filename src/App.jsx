import Register from './components/Register/Register'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={Register}></Route>
      <Route path='/login' element={Login}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
