import React, { useEffect } from 'react';


function Favorites({ song, favoriteSongs, setFavoriteSongs }) {
  const toggleFavorite = (songId) => {
    if (favoriteSongs.some((favSong) => favSong.id === songId)) {
      // If the song is already in favorites, remove it
      setFavoriteSongs(favoriteSongs.filter((favSong) => favSong.id !== songId));
    } else {
      // If the song is not in favorites, add it
      setFavoriteSongs([...favoriteSongs, song]);
    }
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteSongs');
    if (storedFavorites) {
      setFavoriteSongs(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs));
  }, [favoriteSongs]);

  return (
    <button className="bg-cyan-500 hover:bg-cyan-600 " onClick={() => toggleFavorite(song.id)} >
      {favoriteSongs.some((favSong) => favSong.id === song.id) ? (
        <span role="img" aria-label="Red Heart">
          ❤️
        </span>
      ) : (
        <span role="img" aria-label="White Heart">
          🤍
        </span>
      )}
    </button>
  );
}

export default Favorites;
