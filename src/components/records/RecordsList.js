import { useEffect, useState } from "react";
import { deleteRecord, getRecords } from "../../services/recordsFetchService";
import { Link, useNavigate } from "react-router-dom";
import "./Records.css";

export const RecordsList = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  useEffect(() => {
    getRecords().then((recordsArray) => {
      setRecords(recordsArray);
    });
  }, []);

  const handleDelete = (id) => {
    deleteRecord(id).then(() => {
      getRecords().then((recordsArray) => {
        setRecords(recordsArray);
      });
    });
  };

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
            <button
              className="edit-button"
              onClick={() => {
                navigate(`/edit-album/${record.id} `);
              }}
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => {
                handleDelete(record.id);
              }}
            >
              Delete
            </button>
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
