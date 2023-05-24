import React, { useEffect, useState } from 'react';

function FavoriteSongsPage() {
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteSongs');
    if (storedFavorites) {
      setFavoriteSongs(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div>
      <h1>Favorite Songs</h1>
      {favoriteSongs.length > 0 ? (
        <ul>
          {favoriteSongs.map((song, index) => (
            <li key={index} className="bg-light-green dib br3 pa3 grow bw2 shadow-5">
              <h3>{song.title}</h3>
              <p>Duration: {song.duration}</p>
              <p>Release Year: {song.releaseYear}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite songs found.</p>
      )}
    </div>
  );
}

export default FavoriteSongsPage;
