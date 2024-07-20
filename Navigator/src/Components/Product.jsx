import axios from "axios"
import { useEffect, useState } from "react"

function Product() {
  const [product, setproduct] = useState([])
  const [limit,setlimit]=useState(1)

  const getdatafromserver = () => {
    axios.get(`http://localhost:3000/products?_page=${limit}&_limit=4`)
      .then((res) => {
        setproduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getdatafromserver()
  }, [limit])

  fetch("http://localhost:3000/products")
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "15px", textAlign: "center", marginTop: "50px" }}>
        {product.map((el) => (
          <>
            <div key={el.id} style={{boxshadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
              <img src={el.image} alt="" height={300} width={300}  />
              <h1>{el.title}</h1>
              <p>{el.price}</p>
              <button>Edit</button>
              <button>delete</button>

            </div>
          </>
        ))}
        
      </div>
      <div style={{textAlign:"center"}}>
      <button onClick={()=>{setlimit(limit-1)}}>Prev</button>
      <span>{limit}</span>
      <button onClick={()=>{setlimit(limit+1)}}>Next</button>
      </div>

    </div>
  )
}

export default Product
