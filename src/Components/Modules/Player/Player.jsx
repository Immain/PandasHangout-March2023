import React from "react";
import ReactPlayer from "react-player";
import "./Player.css";

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
        light="https://i.etsystatic.com/34466454/r/il/ce3153/3798316597/il_fullxfull.3798316597_d0sl.jpg"
      />
    </div>
  );
};

export default Player;

/* https://i.imgur.com/n7hYjrG.png */
