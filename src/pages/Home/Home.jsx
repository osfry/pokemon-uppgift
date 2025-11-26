import { Link, useNavigate } from "react-router-dom"


const Home =()=>{

    const navigate= useNavigate();
    return(
        <div className="home">
            <Link to="/pokedex"> 
             <button onClick={navigate("/pokedex")}>Start Pokemon App</button>
             </Link>
          
        </div>
    )
}
export default Home