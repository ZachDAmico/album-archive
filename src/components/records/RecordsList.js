import { useEffect, useState } from "react";
import {
  deleteRecord,
  editRecord,
  getAllRecords,
  getRecordsById,
} from "../../services/recordsFetchService";
import { Link, useNavigate } from "react-router-dom";
import "./Records.css";

export const RecordsList = ({ currentUser }) => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [userRecords, setUserRecords] = useState([]);
  const [randomRecord, setRandomRecord] = useState(null);

  useEffect(() => {
    currentUser.id &&
      getRecordsById(currentUser.id).then((recordsArray) => {
        setUserRecords(recordsArray);
      });
  }, [currentUser, records]);

  useEffect(() => {
    getAllRecords().then((allRecordsArray) => {
      setRecords(allRecordsArray);
    });
  }, []);

  const handleDelete = (id) => {
    deleteRecord(id).then(() => {
      getRecordsById(currentUser.id).then((recordsArray) => {
        setRecords(recordsArray);
      });
      window.alert("Album deleted");
    });
  };

  const getRandomRecord = () => {
    if (userRecords.length > 0) {
      const randomRecordInteger = Math.floor(
        Math.random() * userRecords.length
      );
      setRandomRecord(userRecords[randomRecordInteger]);
    }
  };

  return (
    <div className="records-container">
      <Link to="/add-new-album">
        <button className="add-album-button">Add New Album</button>
      </Link>

      <button className="random-button" onClick={getRandomRecord}>
        Random Record
      </button>

      {randomRecord && (
        <div className="random-record">
          <img src={randomRecord.albumArtUrl} alt={randomRecord.albumName} />
          <p>{randomRecord.albumName}</p>
          <p>{randomRecord.artistName}</p>
          <p>{randomRecord.year}</p>
          <p>{randomRecord.genre.genreName}</p>
        </div>
      )}

      {userRecords?.map((record) => {
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
            <div>
              <label htmlFor="favoritedAlbum">
                Favorite:
                <input
                  type="checkbox"
                  id="favoritedAlbum"
                  checked={record.favorite}
                  name="favorite"
                  onChange={() => {
                    const recordCopy = { ...record };
                    recordCopy.favorite = !record.favorite;
                    editRecord(record.id, recordCopy);
                    getAllRecords().then((allRecordsArray) => {
                      setRecords(allRecordsArray);
                    });
                  }}
                />
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
