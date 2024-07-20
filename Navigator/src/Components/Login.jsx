import axios from "axios"
import { useState } from "react"


function Login() {
  const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
  
  const handalsubmit=(e)=>{
    

    e.preventDefault()

    let userdata={
      email,
      password,
    }

    axios.post("https://reqres.in/api/login",userdata)
    .then((res)=>{
      let tokanres= res.data.token
      localStorage.setItem("token",tokanres)

    })
    .catch((err)=>console.log(err))
  }
    

 
 
  return (
    <div>
      <h1>This is login page</h1>
      <form action=""  onSubmit={(e)=>handalsubmit(e)}>
        <input onChange={(e)=>setemail(e.target.value)}  type="text" placeholder="Enter your email" />
        <input   onChange={(e)=>setpassword(e.target.value)}   type="password"  placeholder="Enter a password"/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
