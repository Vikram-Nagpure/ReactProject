
function Privetrouting({children}) {
    const isAuth=localStorage.getItem("token")
   
    if(!isAuth){
        window.location.href="/Login"
    }
    else{
        return children
    }
 
}

export default Privetrouting
