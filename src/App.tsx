import { Route, Routes } from "react-router-dom";
import SignUp from "./component/auth/SignUp";
import SignIn from "./component/auth/SignIn";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
