import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify, isPlaying, handlePlaying }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body
          spotify={spotify}
          isPlaying={isPlaying}
          handlePlaying={handlePlaying}
        />
      </div>
      <Footer isPlaying={isPlaying} handlePlaying={handlePlaying} />
    </div>
  );
}

export default Player;
