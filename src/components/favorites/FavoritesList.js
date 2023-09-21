import { useEffect, useState } from "react";
import { getFavoritesById } from "../../services/favoritesFetchService";

export const FavoritesList = ({ currentUser }) => {
  const [favoriteAlbums, setFavoriteAlbums] = useState([]);

  useEffect(() => {
    getFavoritesById(currentUser.id).then((favoritesArray) => {
      setFavoriteAlbums(favoritesArray);
    });
  }, [currentUser.id]);

  return (
    <div className="favorites-list-container">
      <h2 className="favorites-titles">Favorites</h2>
      <ul>
        {favoriteAlbums.map((album) => {
          return <li key={album.id}>{album.albumArtUrl}</li>;
        })}
      </ul>
    </div>
  );
};
