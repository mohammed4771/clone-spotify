import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SongRow from "./SongRow";

function Body({ spotify, isPlaying, handlePlaying }) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/Ruyl2RgCNjiW-gMTG686x1a39ZMpaKI-X9PqWT0v7ny0dHd_w8okPI0pUfc8u_fNlOhIe4K-tCA_StikWnG8lso_PIiQeFyqSKNhedowJCA=/NDA6OTU6MjFUNTEtODAtMg=="
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <div onClick={handlePlaying} className="body__play_pause_btns">
            {isPlaying ? (
              <PauseCircleIcon className="body__shuffle" />
            ) : (
              <PlayCircleFilledIcon className="body__shuffle" />
            )}
          </div>
          <FavoriteIcon fontSize="large" className="fav" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
