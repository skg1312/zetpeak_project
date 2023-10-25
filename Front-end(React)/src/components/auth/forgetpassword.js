import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react';

export function ForgetPassword(){
const [email,setEmail] =useState()
const navigate=useNavigate();

function handleSubmit(e){
  if(!email){
    alert("please Enter your Email")
  }else{
    navigate('/resetpassword')

  }


}

function handleEmailInput(e){
  setEmail(e.target.value)
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
                  <span className='span-1'>Create,<br/>Manage <br/> & </span><span  className='span-2'>Boost your</span><br/><span  className='span-3'>Business</span>
                </p>
              </div>
             
            </div>
            <div className="right-section">
              <p  className='right-heading'>Forget Password</p>
              <form className='form' onSubmit={handleSubmit}>
              <input onChange={handleEmailInput}className='input-field' type="email" placeholder='Email'/>
                <button className='submit-btn'  type='submit'>Submit</button>
                             </form>

            <p>Did you remember your password?<Link className="links"  to='/signIn'>Login</Link></p>

            </div>
        </div>
    )


}