// import '../App.css'
import { useState } from "react"
import {Link} from "react-router-dom"
export function CreateAccount(){
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
function handleNameInput(e){
  setName(e.target.value)
}
function handleEmailInput(e){
  setEmail(e.target.value)
}
function handlePasswordInput(e){
  setPassword(e.target.value)
}
function handleSubmit(){
if(name && email &&password){
  alert("You have successfully created an account!")
}else{
  alert("Please fill all fields to create an account.")
}
}
return(
  <div className="container">
          
            <div className="left-section">
              <div className='left-text'>
                <p style={{
                  fontSize:"60px",
                  fontWeight:'600px',
                  fontFamily:'Akshar',
                }}>
                  <span className='span-1' >Create,<br/>Manage <br/> & </span><span className='span-2' >Boost your</span><br/><span className='span-3'>Business</span>
                </p>
              </div>
             
            </div>
            <div className="right-section">
              <p className='right-heading'>Create an Account </p>
              <form className='form'onSubmit={handleSubmit}>
              <input onChange={handleNameInput} className='input-field' type='text' placeholder='FullName '/>
              <input onChange={handleEmailInput}className='input-field'  type="email" placeholder='Email'/>
                <input onChange={handlePasswordInput}className='input-field' placeholder='Password' type='password' />
                <button className='submit-btn' type='submit'>Create Account</button>
                             </form>
                             <div className="link-section">
                           
            <p style={{textAlign:"right"}}>already have an account?<Link className="links"  to='/signIn'>Login</Link></p>
</div>
            </div>
        </div>
    
        )
    
    
  }