import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User_Profile from "./components/User_Profile";
import User_Buyer_Details from "./components/User_Buyer_Details";
import User_Seller_Details from "./components/User_Seller_Details";
import User_Consignment_Details from "./components/User_Consignment_Details";
import Super_Admin_Dashboard from "./components/Super_Admin_Dashboard";
import Group93 from "./components/Group93";
import Group94 from "./components/Group94";
import Group95 from "./components/Group95";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="userprofile" element={<User_Profile />} />
          <Route path="buyerdetail" element={<User_Buyer_Details />} />
          <Route path="sellerdetail" element={<User_Seller_Details/>} />
          <Route path="consignmentdetail" element={<User_Consignment_Details/>} />
          <Route path="superadmindashboard" element={<Super_Admin_Dashboard/>} />
          <Route path="group93" element={<Group93/>} />
          <Route path="group94" element={<Group94/>} />
          <Route path="group95" element={<Group95/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
