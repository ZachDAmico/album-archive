import { Route, Routes } from "react-router-dom";
import { RecordsList } from "./components/records/RecordsList";
import { Users } from "./components/users/Users";

export const App = () => {
  return (
    <Routes>
      <Route path="/records" element={<RecordsList />} />
      <Route path="/users" element={<Users />} />
    </Routes>

    // <>
    //   <div className="welcome">Welcome to Album Archive</div>; */}
    //   {/* <div>{<Login />}</div>
    // </>
  );
};
