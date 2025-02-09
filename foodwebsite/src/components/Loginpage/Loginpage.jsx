import React, {  useContext, useState } from 'react';
import "./Loginpage.css"
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const Loginpage =({setshowlogin})=> {

const {url,setToken}=useContext(StoreContext)

  const [currentstate,setcurrentstate]= useState("Login")
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

const onLogin= async(event)=>{
   event.preventDefault()
   let newUrl=url;
   if (currentstate==="Login") {
     newUrl +="/api/user/login"
   }else{
    newUrl += "/api/user/register"
   }

   const response = await axios.post(newUrl,data);
   if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setshowlogin(false)
   }else{
    alert(response.data.message)
   }
}


  return (
    <div className='login-pop'>
      <form onSubmit={onLogin} className="login-pop-container">
        <div className="login-pop-title">
          <h2>{currentstate}</h2>
          <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt=''/>
        </div>
        <div className="login-pop-input">
          {currentstate==="Login"?<></>: <input type='text' name='name' onChange={onChangeHandler} value={data.name} placeholder='Your name' required></input>}
         
          <input name="email" onChange={onChangeHandler} value={data.email} type='email' placeholder='Your email' required></input>
          <input name="password" onChange={onChangeHandler} value={data.password} type='password' placeholder='password' required></input>
        </div>
        <button type="submit" >{currentstate ==="Sign Up"?"Create account":"Login"}</button>
        
        <div className="login-pop-condition">
          <input type='checkbox' required/>
          <p>By continue, I agree to the term of use & privacy policy</p>
        </div>
        {currentstate==="Login"
        ?  <p>Create a new account?< span onClick={()=>setcurrentstate("Sign Up")}>Click here</span></p>:
           <p>Already have a account? <span onClick={()=>setcurrentstate("Login")}>Login here</span></p>
        }
      
       
      </form>
     
    </div>
  )
}


export default Loginpage;

