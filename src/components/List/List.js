import React, { useState, useEffect } from "react";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import { StyledModal } from "ui";

const List = (props) => {
  const { className } = props;
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSong, setActiveSong] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
            <div className="select-wrapper">
              <select onChange={handleSelect}>
                <option value="None">None</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
            <h2>Top 10 songs</h2>
            <ul>
              {songs.map((song) => (
                <li
                  onClick={() => {
                    setActiveSong(song);
                    setShowModal(true);
                  }}
                  key={song.id}
                >
                  {song.title}
                </li>
              ))}
            </ul>
          </div>

          {showModal ? (
            <StyledModal
              setShowModal={() => setShowModal(false)}
              activeSong={activeSong}
              showModal={showModal}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default List;
