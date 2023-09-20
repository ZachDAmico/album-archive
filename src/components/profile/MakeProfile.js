import { FavoritesList } from "../favorites/FavoritesList";
import { Users } from "../users/Users";
import "./Profile.css";

//want to import user objects and favorite object data here and do JSX
export const MakeProfile = () => {
  return (
    <div>
      <Users />
      <FavoritesList />
    </div>
  );
};
