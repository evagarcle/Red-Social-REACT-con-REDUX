import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../features/auth/authSlice"

const Header = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  return (
    <div>
      <span>
        <Link to="/">Home /</Link>
      </span>
      { user ? (
      <>
      <span
      onClick={() => 
        dispatch(logout()
      )}
    >
      <Link to="/login"> Logout /</Link>
    </span>
    <span>
        <Link to="/profile"> {user.name} /</Link>
      </span>
      <span>
        <Link to="/newPost"> New post /</Link>
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