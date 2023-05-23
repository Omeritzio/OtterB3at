import React, { useState } from 'react';

function Favorites({ songs }) {
  
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  const toggleFavorite = (songId) => {
    const song = songs.find((song) => song.id === songId);
    if (!song) return;

    if (favoriteSongs.some((favSong) => favSong.id === songId)) {
      // If the song is already in favorites, remove it
      setFavoriteSongs(favoriteSongs.filter((favSong) => favSong.id !== songId));
    } else {
      // If the song is not in favorites, add it
      setFavoriteSongs([...favoriteSongs, song]);
    }
  };

  return (
    <div>

        <div key={songs.id}>
          <button onClick={() => toggleFavorite(song.id)}>
            {favoriteSongs.some((favSong) => favSong.id === song.id) ?(
          <span role="img" aria-label="Red Heart">
            ❤️
          </span>
        ) : (
          <span role="img" aria-label="White Heart">
            🤍
          </span>
        )}
          </button>
        </div>
      
    </div>
  );
}

export default Favorites;
