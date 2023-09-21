import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const imageUrl = "https://i.imgur.com/STzMwqA.png";
  const navigate = useNavigate();
  return (
    <ul className="navbar">
      <li className="navbar-logo">
        <img src={imageUrl} alt="Logo" />
      </li>
      <li className="navbar-item">Home</li>
      <li className="navbar-item">
        <Link to="/">My Crate</Link>
      </li>
      <li className="navbar-item">
        <Link to="/profile">Profile</Link>
      </li>
      {localStorage.getItem("album_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("album_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
