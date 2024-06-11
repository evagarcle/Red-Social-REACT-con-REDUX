import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../features/auth/authSlice"
import { useState } from "react"

const Header = () => {
  const { user } = useSelector((state) => state.auth)
  
  const dispatch = useDispatch()
  
  
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    
    const handleSearch = (e) => {
      setSearch(e.target.value)
      if(e.key == "Enter"){
        navigate("/search/" + search)
        setSearch("")
      }
    }
  

  return (
    <div>
      <input type="text" name="search" value={search} onChange={handleSearch} onKeyUp={handleSearch} placeholder="Search"/><br /><br />
      <span>
        <Link to="/">Home / </Link>
      </span>
      { user ? (
      <>
    <span>
        <Link to="/profile"> {user.name} /</Link>
      </span>
      <span>
        <Link to="/newPost"> New post /</Link>
      </span>
      <span
      onClick={() => 
        dispatch(logout()
      )}
    >
      <Link to="/login"> Logout</Link>
    </span>
    </>
    ) : (
    <>
     <span>
        <Link to="/login"> Login /</Link>
      </span>
      <span>
        <Link to="/register"> Register /</Link>
      </span>
    </>
      )}
     
      
    </div>
  )
}

export default Header