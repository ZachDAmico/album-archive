import { FavoritesList } from "../favorites/FavoritesList";
import { Users } from "../users/Users";
import "./Profile.css";

//want to import user objects and favorite object data here and do JSX
export const MakeProfile = ({ currentUser }) => {
  return (
    <div className="profile-container">
      <div className="user-details">
        <Users currentUser={currentUser} />
      </div>
      <div className="favorites">
        <h2 className="favorite-title">Favorites</h2>
        <FavoritesList currentUser={currentUser} />
      </div>
    </div>
  );
};
