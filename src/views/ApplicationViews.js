import { Outlet, Route, Routes } from "react-router-dom";
import { RecordsList } from "../components/records/RecordsList";
import { AddAlbumForm } from "../components/forms/AddAlbumForm";
import { EditAlbumForm } from "../components/forms/EditAlbumForm";
import { MakeProfile } from "../components/profile/MakeProfile";
import { NavBar } from "../components/nav/NavBar";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localRecordUser = localStorage.getItem("album_user");
    const recordUserObject = JSON.parse(localRecordUser);

    setCurrentUser(recordUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        {/* records list needs access to user */}
        <Route index element={<RecordsList currentUser={currentUser} />} />
        <Route path="add-new-album" element={<AddAlbumForm />} />
        <Route path="edit-album/:recordId" element={<EditAlbumForm />} />
        <Route
          path="profile"
          element={<MakeProfile currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
