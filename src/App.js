import { Route, Routes } from "react-router-dom";
import { RecordsList } from "./components/records/RecordsList";

export const App = () => {
  return (
    <Routes>
      <Route path="/records" element={<RecordsList />} />
    </Routes>

    // <>
    //   <div className="welcome">Welcome to Album Archive</div>; */}
    //   {/* <div>{<Login />}</div>
    // </>
  );
};
