import { useEffect, useState } from "react";
import { getRecordUsers } from "../../services/userFetchService";
import "./Users.css";

//need props
//how do i get the recordUser info here? - useState? map? do i need more than 1 user?
export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getRecordUsers().then((userArray) => {
      setUsers(userArray);
    });
  }, []);
  return (
    <div className="users">
      {users.map((userObj) => {
        return (
          <div key={userObj.id}>
            <img src={userObj.profilePicUrl} alt=""></img>
            <p>{userObj.name}</p>
            <p>{userObj.userName}</p>
            <p>{userObj.email}</p>
          </div>
        );
      })}
    </div>
  );
};
