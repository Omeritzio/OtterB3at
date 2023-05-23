import React from "react";
import Favorites from "./favorites";

function listOfFavorites(artists){
    function isFavorite(songId){
        if(Favorites.favorites.include(songId))
            return songId
    }

    return(
        <div>
            {artists.map((artist,index)=>{
                <div key={index}>
                        
            <Artist artist={artist.artist} />
            <Songs songs={isFavorite(artist.songs.id)} />
            </div>
            })}; 

            </div>


            
       
    )
}

export default listOfFavorites;