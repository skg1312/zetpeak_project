import React, { useState } from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";



function Company_login() {


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
            <div className="box2 transbox">
              <div className="fontfamily "> Company Name </div>
              <div className="font text-center"> TAGLINE</div>
            </div>
            <div className="box1 ">
            <h2><b>LOGIN PAGE</b></h2><br></br>

            <form  action="POST">
            <div class="mb-3">
    <label for="email" class="form-label text-start">Email</label><br></br>
    <input className="rounded " type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email"  size={30} />
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password</label><br></br>
    <input className="rounded " type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" size={30}  />
  </div>
 <br></br>  
  <div class="form-check mb-3">
    <label class="form-check-label "></label>
    <input className="btn btn-primary btnsubmit"  type="submit" onClick={submit} /><br></br>
  </div>       
 

            </form>
    
            </div>
            </div>
            <div className="col-2"></div>
            </div>
            </div>
            
        
    )
}

export default Company_login