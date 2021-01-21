import React from "react";
import LibrarySong from "./LibraySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
