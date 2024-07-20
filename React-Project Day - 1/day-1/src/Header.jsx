
function Header(){
    return(
        <div className="nav" style={{display:"flex",justifyContent:"space-evenly", backgroundColor:"black",color:"whitesmoke" }}>
            <h1>My Todo List</h1>
            <ul style={{display:"flex",listStyle:"none", padding:"10px"}}>
                <li style={{padding:"10px"}}>HOME</li>
                <li style={{padding:"10px"}}>ABOUT</li>
                <li style={{padding:"10px"}}>CONTEACT</li>
            </ul>   
        </div>
    )
}

export default Header