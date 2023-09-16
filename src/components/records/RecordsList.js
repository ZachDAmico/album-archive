import { useEffect, useState } from "react";
import { getRecords } from "../../services/recordsFetchService";
import { Link } from "react-router-dom";
import "./Records.css";

export const RecordsList = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    getRecords().then((recordsArray) => {
      setRecords(recordsArray);
    });
  }, []);

  return (
    <div className="records-container">
      <Link to="/add-new-album">
        <button className="add-album-button">Add New Album</button>
      </Link>
      {records.map((record) => {
        return (
          <div key={record.id} className="record">
            <img src={record.albumArtUrl} alt={record.albumName} />
            <p>{record.albumName}</p>
            <p>{record.artistName}</p>
            <p>{record.year}</p>
            <p>{record.genre.genreName}</p>
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
            <label className="favorite-check-box">
              Favorite:
              <input type="checkbox" />
            </label>
          </div>
        );
      })}
    </div>
  );
};
