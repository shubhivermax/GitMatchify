import { useState, useEffect} from "react"


const Register = () => {

  const [data, setData] = useState({
    name:'',
    email:'',
    password: '',

  })
  useEffect(() => {
    console.log("Current form data:", data);
  }, [data]);

  const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div>Register
      <form onSubmit={registerUser}>
         <label>Name</label>
         <input type='text' placeholder='enter name...' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}></input>
         <label>Email</label>
         <input type='email' placeholder='enter email...' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}></input>
         <label>Password</label>
         <input type='password' placeholder='enter password...' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}></input>
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register