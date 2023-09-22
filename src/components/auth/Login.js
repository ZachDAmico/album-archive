import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getUserByEmail } from "../../services/userFetchService";
import recordVideo from "../../assets/pexel-record-video.mp4";
export const Login = () => {
  const [email, set] = useState("");
  const navigate = useNavigate();

  //do i need this at all?
  const handleLogin = (e) => {
    e.preventDefault();

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const recordUser = foundUsers[0];
        localStorage.setItem(
          "album_user",
          JSON.stringify({
            id: recordUser.id,
            email: recordUser.email,
            name: recordUser.name,
            userName: recordUser.userName,
            profilePicUrl: recordUser.profilePicUrl,
          })
        );

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main className="container-login">
      <div className="video-container">
        <video autoPlay muted loop id="video-background">
          <source src={recordVideo} type="video/mp4" />
        </video>
      </div>
      <section>
        <form className="form-login" onSubmit={handleLogin}>
          <h1>Album Archive</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="login-btn btn-info" type="submit">
                Sign in
              </button>
            </div>
          </fieldset>
        </form>
      </section>
      <section>
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  );
};
