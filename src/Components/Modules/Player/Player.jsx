import React from "react";
import ReactPlayer from "react-player";
import "./Player.css";
import StreamLive from "../../../assets/StreamLive.png";

const Player = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
        light={StreamLive}
      />
    </div>
  );
};

export default Player;
