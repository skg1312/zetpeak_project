import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import imglogin from '../resources/user_login_image.png';


function Login() {


    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("you are logged in")
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-lg-8">
            <div className="box2">
              <div className="fontfamily"> WELCOME BACK </div>
              <div className="font text-center"> Welcome back! Please enter your 
                details.</div>
            </div>
            <div className="box1">
            <h2><b>LOGIN</b></h2><br></br>

            <form  action="POST">
            <div class="mb-3">
    <label for="email" class="form-label text-start">Email</label><br></br>
    <input className="rounded " type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email"  size={30} />
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password</label><br></br>
    <input className="rounded " type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" size={30}  />
  </div>
  <div class="form-check ">
    <pre><label class="form-check-label">
      <input class="rounded " type="checkbox" name="remember"/> Remember me 
    </label>     <a href="/Forget_password"><label className="text-danger ">Forget Password</label></a></pre>
  </div>  <br></br>       
  <div class="form-check mb-3">
    <label class="form-check-label "></label>
    <input className="btn btn-danger btnsubmit"  type="submit" onClick={submit} /><br></br>
  </div>       
 <pre>          Dont't have an account? <a href="/Signup"><label className="text-danger ">Sign Up!</label></a></pre>          

            </form>
            <img src={imglogin}></img>
    
            </div>
            </div>
            <div className="col-2"></div>
            </div>
            </div>
            
        
    )
}

export default Login