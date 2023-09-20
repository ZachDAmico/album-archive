import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editRecord, getRecordById } from "../../services/recordsFetchService";
import { getGenres } from "../../services/genreFetchService";

//need useParams?
export const EditAlbumForm = () => {
  const [record, setRecord] = useState({});
  const [genres, setGenres] = useState([]);
  // const [favorite, setFavorite] = useState(false);

  const { recordId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getGenres().then((genreArray) => {
      setGenres(genreArray);
    });

    getRecordById(recordId).then((recordObj) => {
      setRecord(recordObj);
    });
  }, [recordId]);

  const handleSave = (event) => {
    event.preventDefault();

    const updatedRecord = {
      artistName: record.artistName,
      albumName: record.albumName,
      albumArtUrl: record.albumArtUrl,
      year: record.year,
      favorite: record.favorite,
      genreId: record.genreId,
      recordUserId: record.recordUserId,
    };
    editRecord(recordId, updatedRecord).then(() => {
      navigate(`/`);
    });
  };

  return (
    <form className="album-form">
      <h2 className="album-form-title">Edit Album Info</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="artistName">Artist Name: </label>
          <input
            value={record.artistName}
            name="artistName"
            type="text"
            className="form-control"
            placeholder="artist name"
            onChange={(event) => {
              const recordCopy = { ...record };
              recordCopy.artistName = event.target.value;
              setRecord(recordCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="albumName">Album Name: </label>
          <input
            value={record.albumName}
            name="albumName"
            type="text"
            className="form-control"
            placeholder="album name"
            onChange={(event) => {
              const recordCopy = { ...record };
              recordCopy.albumName = event.target.value;
              setRecord(recordCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL: </label>
          <input
            value={record.albumArtUrl}
            name="albumArtUrl"
            type="text"
            className="form-control"
            placeholder="https://www.albumart.com"
            onChange={(event) => {
              const recordCopy = { ...record };
              recordCopy.albumArtUrl = event.target.value;
              setRecord(recordCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="year">Release Year: </label>
          <input
            value={record.year}
            name="year"
            type="text"
            className="form-control"
            placeholder="release year"
            onChange={(event) => {
              const recordCopy = { ...record };
              recordCopy.year = event.target.value;
              setRecord(recordCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="genre">Genre: </label>
          <select
            value={record.genreId}
            name="genreId"
            type="text"
            className="form-control"
            placeholder="Please select a genre"
            onChange={(event) => {
              const recordCopy = { ...record };
              recordCopy.genreId = parseInt(event.target.value);
              setRecord(recordCopy);
            }}
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
          <label htmlFor="favorite">Favorite:</label>
          <input
            type="checkbox"
            checked={record.favorite}
            name="favorite"
            onChange={(event) => {
              const recordCopy = { ...record };
              recordCopy.favorite = event.target.checked;
              setRecord(recordCopy);
            }}
          />
        </div>
      </fieldset>
      <button className="button" onClick={handleSave}>
        Add Record
      </button>
    </form>
  );
};
