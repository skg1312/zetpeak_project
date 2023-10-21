import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import User_Profile from "./components/User_Profile";
import User_Buyer_Details from "./components/User_Buyer_Details";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="userprofile" element={<User_Profile />} />
          <Route path="buyerdetail" element={<User_Buyer_Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
