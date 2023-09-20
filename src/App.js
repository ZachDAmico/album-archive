import { Outlet, Route, Routes } from "react-router-dom";
import { RecordsList } from "./components/records/RecordsList";
// import { Users } from "./components/users/Users";
import { NavBar } from "./components/nav/NavBar";
import { AddAlbumForm } from "./components/forms/AddAlbumForm";
import "./App.css";
import { EditAlbumForm } from "./components/forms/EditAlbumForm";
import { MakeProfile } from "./components/profile/MakeProfile";

export const App = () => {
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
        <Route index element={<RecordsList />} />
        <Route path="add-new-album" element={<AddAlbumForm />} />
        <Route path="edit-album/:recordId" element={<EditAlbumForm />} />
        <Route path="profile" element={<MakeProfile />} />
      </Route>
    </Routes>
  );
};
