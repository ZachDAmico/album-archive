import { useEffect, useState } from "react";
import { getGenres } from "../../services/genreFetchService";
import { useNavigate } from "react-router-dom";
import { postRecord } from "../../services/recordsFetchService";

export const AddAlbumForm = ({ currentUser }) => {
  const [newRecord, setNewRecord] = useState({
    artistName: "",
    albumName: "",
    albumArtUrl: "",
    year: "",
    favorite: false,
    genreId: 0,
    recordUserId: 0,
  });
  const [genres, setGenre] = useState([]);
  const [favorite, setFavorite] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getGenres().then((genreArray) => {
      setGenre(genreArray);
    });
  }, []);

  const handleInputChange = (event) => {
    const recordCopy = { ...newRecord };
    recordCopy[event.target.name] = event.target.value;
    setNewRecord(recordCopy);
  };

  const handleFavoriteChange = (event) => {
    setFavorite(event.target.checked);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const newRecordItem = {
      artistName: newRecord.artistName,
      albumName: newRecord.albumName,
      albumArtUrl: newRecord.albumArtUrl,
      year: newRecord.year,
      favorite: favorite,
      genreId: newRecord.genreId,
      recordUserId: currentUser.id,
    };

    postRecord(newRecordItem).then(() => {
      navigate("/");
    });
  };
  return (
    <form className="album-form">
      <h2 className="album-form-title">Add New Album to Your Crate</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="newArtistName">Artist Name: </label>
          <input
            value={newRecord.artistName}
            name="artistName"
            id="newArtistName"
            type="text"
            className="form-control"
            placeholder="artist name"
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="newAlbumName">Album Name: </label>
          <input
            value={newRecord.albumName}
            name="albumName"
            id="newAlbumName"
            type="text"
            className="form-control"
            placeholder="album name"
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="newAlbumArtUrl">Image URL: </label>
          <input
            value={newRecord.albumArtUrl}
            name="albumArtUrl"
            id="newAlbumArtUrl"
            type="text"
            className="form-control"
            placeholder="https://www.albumart.com"
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="newYear">Release Year: </label>
          <input
            value={newRecord.year}
            name="year"
            id="newYear"
            type="text"
            className="form-control"
            placeholder="release year"
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="newGenreId">Genre: </label>
          <select
            value={newRecord.genreId}
            name="genreId"
            id="newGenreId"
            type="text"
            className="form-control"
            placeholder="Please select a genre"
            onChange={handleInputChange}
          >
            <option value={0}>Please select a genre</option>
            {genres.map((genreObj) => {
              return (
                <option key={genreObj.id} value={genreObj.id}>
                  {genreObj.genreName}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="newFavorite">Favorite:</label>
          <input
            type="checkbox"
            checked={favorite}
            name="favorite"
            id="newFavorite"
            onChange={handleFavoriteChange}
          />
        </div>
      </fieldset>
      <button className="button" onClick={handleSave}>
        Add Record
      </button>
    </form>
  );
};
