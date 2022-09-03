import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

import { Grid, Slider } from "@mui/material";
import { useStateValue } from "./StateProvider";

function Footer({ isPlaying, handlePlaying }) {
  const [{ item }, dispatch] = useStateValue();
  // console.log(item.artists.map((artist) => artist.name).join(", "));
  let artists = "No Song Is Playing";
  let album = "No Song Is Playing";
  let songInfo = "No Song Is Playing";

  if (item) {
    artists = item.artists.map((artist) => artist.name).join(", ");
    album = item?.album.name;
    songInfo = `${artists} ${album}`;
  }
  // console.log(songInfo);

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          // src="https://i.scdn.co/image/ab67616d00001e0248e6dd103995978597f39d2a"
          src={item && item.album.images[0].url}
          alt=""
        />
        <div className="footer__songInfo">
          {item && item.name.length > 40 ? (
            <>
              <h4>{item && item.name.slice(0, 14)}...</h4>
              <p>{songInfo.slice(0, 15)}...</p>
            </>
          ) : (
            <>
              <h4>{item && item.name}</h4>
              <p>{songInfo.slice(0, 15)}...</p>
            </>
          )}

          {/* <h4>Empty Notes!</h4>
          <p>Ghostly Kisses</p> */}
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />

        {/* <PlayCircleOutlineIcon fontSize="large" className="footer__icon" /> */}

        <div onClick={handlePlaying}>
          {isPlaying ? (
            <PauseCircleOutlineIcon fontSize="large" className="footer__icon" />
          ) : (
            <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
          )}
        </div>

        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footer__icon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footer__icon" />
          </Grid>
          <Grid item>
            <Slider
              className="volume"
              size="small"
              aria-label="Small"
              defaultValue={15}
              valueLabelDisplay="auto"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
