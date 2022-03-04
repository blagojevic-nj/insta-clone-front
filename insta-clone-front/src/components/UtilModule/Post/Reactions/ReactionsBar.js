import React from "react";
import { Reactions } from "./Reactions/Reactions";
import "./ReactionsBar.css";

const ReactionsBar = ({ likes }) => {
  return (
    <div className="reactions-container">
      <Reactions
        reactionKind={"POST_REACTION"}
      />
      <div className="likes">
        <p className="likes-text">Liked By {likes} people</p>
      </div>
    </div>
  );
};

export default ReactionsBar;
