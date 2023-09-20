import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <ul className="navbar">
      <li className="navbar-logo">
        {/* <img></img> */}
        Logo
      </li>
      <li className="navbar-item">Home</li>
      <li className="navbar-item">
        <Link to="/">My Crate</Link>
      </li>
      <li className="navbar-item">
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link
          className="navbar-logout"
          to=""
          onClick={() => {
            localStorage.removeItem("record_user");
            navigate("/", { replace: true });
          }}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
};
