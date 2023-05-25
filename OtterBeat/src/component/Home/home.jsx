import React from "react";
import { Link } from "react-router-dom";

function Home() {


  return (
    <div >
      <img
        className="mx-auto w-fit "
        src=".\src\assets\OtterBeat.png"
        alt="OtterBeat"
        style={{display:"block"}}
      />
      <br />
      <Link to="/songs">
        <button>Songs</button>
      </Link>
    </div>
  );
}

export default Home;
