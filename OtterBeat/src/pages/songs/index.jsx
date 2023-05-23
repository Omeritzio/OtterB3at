import React, { useState } from "react";
import ListOfSongs from "../../component/Card/listofsongs";


function SongsPage() {
  const [artists, setArtists] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/Songs.json");
      if (!response.ok) {
        throw new Error("Failed to fetch JSON data");
      }
      const data = await response.json();
      setArtists(data);
    } catch (error) {
      console.error("Error fetching JSON:", error);
    }
  };

  useState(() => {
    fetchData();
  }, []);
  return(
  <div><ListOfSongs artists={artists}/></div>
  ) ;
}

export default SongsPage;
