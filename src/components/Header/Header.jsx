import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';


const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/" + search);
      setSearch("");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    {user.name}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/newPost">
                    New Post
                  </Link>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </span>
                </li>
              </>
            )}
            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              name="search"
              value={search}
              onChange={handleSearch}
              onKeyUp={handleSearch}
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
