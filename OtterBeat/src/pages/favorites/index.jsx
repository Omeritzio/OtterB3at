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
        favoriteSongs.map((song) => (
          <div key={song.id}>
            <span>{song.title}</span>
          </div>
        ))
      ) : (
        <p>No favorite songs found.</p>
      )}
    </div>
  );
}

export default FavoriteSongsPage;

