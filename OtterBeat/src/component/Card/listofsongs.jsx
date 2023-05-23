import React, { useState } from "react";
import Artist from "./artist";
import Songs from "./songs";

// import Song from "./song";

function ListOfSongs(props) {
  const {artists} = props

  return (
    <div>
      {artists.map((artist, index) => {
        // console.log(artist)
        return (
          <div key={index}>
            <Artist artist={artist.artist} />
            <Songs songs={artist.songs} />
          </div>
        );
      })}
    </div>
  );
}

export default ListOfSongs;
