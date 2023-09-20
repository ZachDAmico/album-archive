import { useEffect, useState } from "react";
import { getFavoriteAlbums } from "../../services/favoritesFetchService";

export const FavoritesList = () => {
  const [favoriteAlbums, setFavoriteAlbums] = useState([]);

  useEffect(() => {
    getFavoriteAlbums().then((favoritesArray) => {
      setFavoriteAlbums(favoritesArray);
    });
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favoriteAlbums.map((album) => {
          return <li key={album.id}>{album.albumName}</li>;
        })}
      </ul>
    </div>
  );
};
