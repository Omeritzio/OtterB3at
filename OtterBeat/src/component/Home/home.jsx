import React from "react"
import { Link } from "react-router-dom"


function Home(){
    return(
        <div>      
            <Link to="/songs">
            <button> 
                Songs
            </button>
            </Link>
        </div>
    )
}

export default Home