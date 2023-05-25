import React, { useState } from 'react';
import Favorites from './Favorites';

function Songs({ songs }) {
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  return (
    <div>
      <ul>
        {songs.map((song, songIndex) => (
          <li
            key={songIndex}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 dib br3 pa3 grow bw2 shadow-5"
          >
            <h3>{song.title}</h3>
            <p> Duration: {song.duration}</p>
            <p>Release Year: {song.releaseYear}</p>
            <Favorites
              song={song}
              favoriteSongs={favoriteSongs}
              setFavoriteSongs={setFavoriteSongs}
              />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Songs;
