import { useNavigate } from "react-router-dom"
export function ResetPassword(){
  const navigate=useNavigate()
  function handleSubmit(){
    alert("your Password has been changed Successfully!");



    navigate('/signin')
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
                  <span  className='span-1' >Create,<br/>Manage <br/> & </span><span  className='span-2'>Boost your</span><br/><span  className='span-3'>Business</span>
                </p>
              </div>
             
            </div>
            <div className="right-section">
              <p  className='right-heading'>Reset Password </p>
              <form className='form' onSubmit={handleSubmit}>
              <input className='input-field' type="email" placeholder='Email'/>
                <input className='input-field' placeholder='New Password' type='password' />
                <input className='input-field' placeholder='Confirm Password' type='password' />

                <button className='submit-btn'  type='submit'>Reset password</button>

            

                             </form>
            </div>
        </div>
    )


}