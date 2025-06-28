
import { useState

 } from "react"
const Login = () => {

  const [data,setData]= useState({
    email:'',
    password:'',
  })
  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault
  }
  return (
    <div>Login
      <form onSubmit={loginUser}>
         
         <label>Email</label>
         <input type='email' placeholder='enter email...' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}></input>
         <label>Password</label>
         <input type='password' placeholder='enter password...' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}></input>
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login