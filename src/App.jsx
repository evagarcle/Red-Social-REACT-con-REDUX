import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import PostDetail from './components/PostDetail/PostDetail'
import PrivateZone from './guards/PrivateZone'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={
            <PrivateZone>
              <Profile />
            </PrivateZone>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/posts/:_id" element={<PostDetail />} /> */}
          <Route path="/posts/id/:_id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
