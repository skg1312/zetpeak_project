import {Link} from "react-router-dom"
import {useState} from 'react'
// import '../styles/createaccount.css'


export function SignIn(){
  
  const[email,setEmail] =useState();
  const [password,setPassword] = useState()

function handleEmailInput(e){
  setEmail(e.target.value)
}
function handlePasswordInput(e){
  setPassword(e.target.value)
}
function handleSubmit(){
if( email &&password){
  alert("Signing you In")

  
}else{
  alert("Please fill your Registered Email and Password!")
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
                  <span  className='span-1' >Create,<br/>Manage <br/> & </span><span className='span-2' >Boost your</span><br/><span  className='span-3'>Business</span>
                </p>
              </div>
             
             
            </div>
            <div className="right-section">
              <p  className='right-heading'>Sign In </p>
              <form className='form' onSubmit={handleSubmit}>
              <input onChange={handleEmailInput} className='input-field' type="email" placeholder='Email'/>
                <input  onChange={handlePasswordInput}className='input-field' placeholder='Password' type='password' />
                <button className='submit-btn'   type='submit'>Login</button>
                             </form>

<div className="link-section">



<p> <Link className="links" to ='/forgetpassword'>Forget Password</Link>
  <span style={{marginLeft:"20px"}}> Don't have an account?<Link className="links"  to='/'>SignUp here</Link></span></p>
</div>
            </div>
            </div>
    )


}