import { useEffect, useState } from "react";
import { getRecordUsers } from "../../services/userFetchService";
import "./Users.css";

//need props
//how do i get the recordUser info here? - useState? map? do i need more than 1 user?
export const Users = ({ currentUser }) => {
  // const [loggedInUser, setLoggedInUser] = useState({});

  // useEffect(() => {
  //   getRecordUsers().then((userArray) => {
  //     setLoggedInUser(userArray);
  //   });
  // }, []);
  return (
    <div className="users-container">
      return (
      <div key={currentUser.id} className="user">
        <img
          src={currentUser.profilePicUrl}
          alt=""
          className="user-photo"
        ></img>
        <p>{currentUser.name}</p>
        <p>{currentUser.userName}</p>
        <p>{currentUser.email}</p>
      </div>
      );
    </div>
  );
};
