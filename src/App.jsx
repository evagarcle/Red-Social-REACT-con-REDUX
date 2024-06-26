import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import PostDetail from './components/PostDetail/PostDetail'
import PrivateZone from './guards/PrivateZone'
import NewPost from './components/NewPost/NewPost'
import Search from './components/Search/Search'
import Footer from './components/Footer/Footer'
import UpdatePost from './components/UpdatePost/UpdatePost'

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
          <Route path="/newPost" element={<NewPost />} />
          <Route path="/id/:_id" element={<UpdatePost />} />
          <Route path="/posts/id/:_id" element={<PostDetail />} />
          <Route path="/search/:title" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
