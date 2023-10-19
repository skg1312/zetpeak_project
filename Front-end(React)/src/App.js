// import './App.css'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forget_password from "./components/Forget_password";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Forget_password" element={<Forget_password />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
