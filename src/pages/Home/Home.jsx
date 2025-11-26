import { useNavigate } from "react-router-dom"


const Home =()=>{

    const navigate= useNavigate();
    return(
        <div className="home">
             <button onClick={() => navigate("/pokedex")}>Start Pokemon App</button>
        </div>
    )
}
export default Home