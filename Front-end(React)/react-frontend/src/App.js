import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User_Profile from "./components/User_Profile";
import User_Buyer_Details from "./components/User_Buyer_Details";
import User_Seller_Details from "./components/User_Seller_Details";
import User_Consignment_Details from "./components/User_Consignment_Details";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="userprofile" element={<User_Profile />} />
          <Route path="buyerdetail" element={<User_Buyer_Details />} />
          <Route path="sellerdetail" element={<User_Seller_Details/>} />
          <Route path="consignmentdetail" element={<User_Consignment_Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
