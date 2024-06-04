import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <span><Link to="/">Home /</Link></span>
      <span><Link to="/login"> Login /</Link></span>
      <span><Link to="/register"> Register /</Link></span>
      <span><Link to="/login"> Logout</Link></span>
    </div>
  )
}

export default Header