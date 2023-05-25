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
    <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 " onClick={() => toggleFavorite(song.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
