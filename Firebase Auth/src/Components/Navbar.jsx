 
import { NavLink } from 'react-router-dom'

 

export const Navbar = () => {
    return (<>
        <div   className='navbar pt-3 pb-3 container d-flex justify-content-between'>
            <div className="logo">
                
            </div>
            <div className="nav-links d-flex align-items-center">
                 
                
               
                 <NavLink className="nav_link p-4" to={"/login"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}>Sign-in</NavLink>
                <NavLink className="nav_link p-4" to={"/sign-up"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}>Sign-Up</NavLink>
                 
                
            </div>
            <div className='d-flex align-items-center'>
                
               
                
            </div>
        </div>
    </>
    )
}

export default Navbar