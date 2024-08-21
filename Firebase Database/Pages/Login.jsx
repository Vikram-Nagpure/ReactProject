import GoogleButton from 'react-google-button'
import { auth, provider } from '../Service/Firebase'
import { signInWithPopup } from 'firebase/auth'


function Login() {

  const handallogin=()=>{
   
    signInWithPopup(auth, provider)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }
  
  return (
    <div>
      <h1>Login page</h1>
      <GoogleButton onClick={handallogin}/>
    </div>
  )
}

export default Login
