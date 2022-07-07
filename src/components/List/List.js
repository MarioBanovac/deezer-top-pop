import React, { useState, useEffect } from "react";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";

const List = (props) => {
  const { className } = props;
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const {
      data: {
        tracks: { data },
      },
    } = await axios(
      `https://quiet-hollows-64223.herokuapp.com/https://api.deezer.com/chart`
    );
    setSongs(data);
    setIsLoading(false);
  };

  const handleSelect = ({ target: { value } }) => {
    if (value === "Ascending") {
      const sortedSongs = [...songs.sort((a, b) => a.duration - b.duration)];
      setSongs(sortedSongs);
    } else if (value === "Descending") {
      const sortedSongs = [...songs.sort((a, b) => b.duration - a.duration)];
      setSongs(sortedSongs);
    } else {
      const sortedSongs = [...songs.sort((a, b) => a.position - b.position)];
      setSongs(sortedSongs);
    }
  };

  return (
    <div className={className}>
      {isLoading ? (
        <SpinnerCircular />
      ) : (
        <div>
          <div>
            <select onChange={handleSelect}>
              <option value="None">None</option>
              <option value="Ascending">Ascending (by length)</option>
              <option value="Descending">Descending (by length)</option>
            </select>
          </div>
          <h2>Top 10 songs</h2>
          <ul>
            {songs.map(({ title, id }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default List;
