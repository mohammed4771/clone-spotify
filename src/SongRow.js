import React, { useState } from "react";
import { useStateValue } from "./StateProvider";

import "./SongRow.css";

function SongRow({ track }) {
  const [{}, dispatch] = useStateValue();

  let artists = "";
  let album = "";
  let songInfo = "";
  // console.log("artist", typeof artists);
  // console.log("album", typeof album);
  const handlePlay = () => {
    // artists = track.artists.map((artist) => artist.name).join(", ");
    // album = track.album.name;
    // songInfo = `${artists} ${album}`;
    // console.log(songInfo);

    dispatch({
      type: "SET_ITEM",
      item: track,
    });
  };

  return (
    <div className="songRow" onClick={handlePlay}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        {track.name.length > 40 ? (
          <h1>{track.name.slice(0, 40)}...</h1>
        ) : (
          <h1>{track.name}</h1>
        )}
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
