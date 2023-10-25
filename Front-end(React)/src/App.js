// import './App.css'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forget_password from "./components/Forget_password";
import { CreateAccount } from './auth/createaccount';
import { ForgetPassword } from './auth/forgetpassword';
import { ResetPassword } from './auth/resetpassword';
import { SignIn } from './auth/signIn';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Forget_password" element={<Forget_password />} />
          {/* admin login  */}
          <Route path='/createaccount' element={<CreateAccount/>}/>
<Route path="/forgetpassword" element={<ForgetPassword/>}/>
<Route path="/signin" element={<SignIn/>}/>
<Route path="resetpassword" element={<ResetPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
