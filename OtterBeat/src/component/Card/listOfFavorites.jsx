import React from "react";

function listOfFavorites(artists){


    return(
        <div>
            {artists.map((artist,index)=>{
                <div key={index}>
                        
            <Artist artist={artist.artist} />
            <Songs songs={artist.songs} />
            </div>
            })}; 

            </div>


            
       
    )
}

export default listOfFavorites;