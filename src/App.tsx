import { Route, Routes } from "react-router-dom";
import SignUp from "./component/auth/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
